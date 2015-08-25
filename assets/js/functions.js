// DATE
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var now = new Date();
var month = monthNames[now.getMonth()];
var day = now.getDate();
var dayName = dayNames[now.getDay()];

var current_date = month + ' ' + day;

var last_digit = current_date.substr(current_date.length - 1)

// If the last digit of the date is 2, then add 'nd' so that it prints '2nd'...
var sup = ( last_digit == 2) ? 'nd' : ( last_digit == 3 ) ? 'rd'  : 'th';

$('.today p.rounded').prepend(dayName + ' ' + current_date + '<sup>' + sup + '</sup>');


// TIME
// If current hours are over 12 then subrtract 12 from current hours; else just print current hours
var currentHours = ( now.getHours() > 12 ) ? currentHours - 12 : currentHours;

var timeOfDay = ( now.getHours() < 12 ) ? "AM" : "PM";

var interval;

function updateTime() {
  // Every 1s, run the flashTime function
  interval = setInterval(flashTime, 1000);
}

function flashTime() {
    var now = new Date();
    var hour = now.getHours();
    var hours = ( hour > 12 ) ? hour - 12 : hour
    var minute = now.getMinutes();
    var minutes = ( minute < 10 ) ? '0' + minute : minute;
    var second = now.getSeconds();
    var seconds = ( second < 10 ) ? '0' + second : second;
    var time = hours + ':' + minutes + ' ' + timeOfDay;
    $('.current-time').html(time);
}

$(function() {
    updateTime();
});


// Current Location
// Find user's current location, to use for Flickr + WeatherAPI


// Forcast Module: Need to layout a 6 day forcast. ExpressJS?

// Flickr
var key = '4caa2303454cc8f4922ecc5bc3caa28a';

// Parse target city input and put into variable
var target_city = 'sanfrancisco';


var group_id = '13197975@N00'


// note to randomize page number
var link = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&tags=' + target_city + '&group_id=' + group_id + '&extras=o_dims,o_url' + '&extras=original_format,tags' + '&per_page=1&page=1&format=json&jsoncallback=?';

// console.log('link: ' + link);


var source;
var item_id;
$.getJSON(link, function(data){
  $.each(data.photos.photo, function(i,item){
    source = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
    item_id = item.id;
  });

  var imageJSON = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=' + key + '&photo_id=' + item_id + '&format=json';

  // Get the large size source link and assign to image_link

  $.ajax({
    method: 'get',
    dataType: 'jsonp',
    url: imageJSON})
  .done(function(response){
    if(response !== 200){
      console.log("Error sending request to api: ", response, imageJSON);
    }
  });
});

var image_link;
function jsonFlickrApi(response){
  if(response.stat !== 'ok'){
    console.log("Error getting response from api: ", imageJSON);
  }else{
    var images = response.sizes.size.filter(function(photo){
      return photo.label === 'Large 2048';
    });
    image_link = images[0].source;
    console.log('link: ', image_link);
    $('#main, .forecast-background').css('background-image', 'url(' + image_link + ')');
  }
};
