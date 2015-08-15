
// DATE FUNCTIONSS
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var date = new Date();
var month = monthNames[date.getMonth()];
var day = date.getDate();

var current_date = month + ' ' + day;

var last_digit = current_date.substr(current_date.length - 1)

if (last_digit == 2) {
  sup = 'nd'
} else if(last_digit == 3) {
  sup = 'rd'
} else {
  sup = 'th'
}

$('.today p.rounded').prepend(current_date + '<sup>' + sup + '</sup>');
