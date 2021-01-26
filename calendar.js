
// Declaring the variables.

var currentDay = moment().format('LL');
$("#currentDay").html(currentDay); 
var currentHour = moment().format('H');
var timeRow = $(".time-row");
var saveButton = $(".saveBtn");
var calendar = $(".calendar");

// Reflecting current time on our calendar.
// Coloring current.past and future hour blocks.

function rowClass(){
    timeRow.each(function(){
    var thisRow = $(this);
    var thisRowHr = parseInt(thisRow.attr("data-hour"));

    if (thisRowHr == currentHour) {
      thisRow.addClass("present");
    }
    if (thisRowHr < currentHour) {
      thisRow.addClass("past");
    }
    if (thisRowHr > currentHour) {
      thisRow.addClass("future");
    }
    });
}

// What Happens when I click on save button.

saveButton.on("click", function(){
var hourToUpdate = $(this).parent().attr("data-hour");
var itemToAdd = ($(this).parent()).children("textarea").val(); 

if(hourToUpdate && itemToAdd) {
  localStorage.setItem(hourToUpdate, itemToAdd);
  location.reload();
} else{
  localStorage.removeItem(hourToUpdate);
}
});

// display current to do list items will go here.

$('#nine').html(localStorage.getItem(9));
$('#ten').html(localStorage.getItem(10));
$('#eleven').html(localStorage.getItem(11));
$('#twelve').html(localStorage.getItem(12));
$('#one').html(localStorage.getItem(13));
$('#two').html(localStorage.getItem(14));
$('#three').html(localStorage.getItem(15));
$('#four').html(localStorage.getItem(16));
$('#five').html(localStorage.getItem(17));

$(document).ready(function(){
rowClass()
});