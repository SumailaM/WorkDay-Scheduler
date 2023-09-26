// Wrap all code that interacts with the DOM in a call to jQuery to ensure that   
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = moment().format("dddd, MMMM Do YYYY ");
var now = moment().format("H A");

// This shows the current day
$("#currentDay").text(today);

// outlineWorkday is used to in each hour of the Workday
var outlineWorkday = [
{
  id: "0",
  hour: "09",
  time: "09",
  dayNight: "am",
  reminder:""
},
{
  id: "1",
  hour: "10",
  time: "10",
  dayNight: "am",
  reminder:""
},
{
  id: "2",
  hour: "11",
  time: "11",
  dayNight: "am",
  reminder:""
},
{
  id: "3",
  hour: "12",
  time: "12",
  dayNight: "pm",
  reminder:""
},
{
  id: "4",
  hour: "01",
  time: "01",
  dayNight: "pm",
  reminder:""
},
{
  id: "5",
  hour: "02",
  time: "02",
  dayNight: "pm",
  reminder:""
},
{
  id: "6",
  hour: "03",
  time: "03",
  dayNight: "pm",
  reminder:""
},
{
  id: "7",
  hour: "04",
  time: "04",
  dayNight: "pm",
  reminder:""
},
{
  id: "8",
  hour: "05",
  time: "05",
  dayNight: "pm",
  reminder:""
},
{
  id: "9",
  hour: "06",
  time: "06",
  dayNight: "pm",
  reminder:""
},
  ]
  
// Added tocheck for local storage
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
  outlineWorkday = workEvents;
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
