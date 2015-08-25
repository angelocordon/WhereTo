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
