// Wrap all code that interacts with the DOM in a call to jQuery to ensure that   
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// to get information for the date in the header
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

});
