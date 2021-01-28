
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

var hourArray = ["nine","ten","eleven","twelve","one","two","three","four","five"];
// display current to do list items will go here.
for (var i = 0; i < hourArray.length; i++){
  var hourString = hourArray[i];
  $(`#${hourString}`).html(localStorage.getItem( 9 + i));
}

$(document).ready(function(){
rowClass()
});