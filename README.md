WorkDay-Scheduler
Description
WorkDay Scheduler is a simple web application that allows users to schedule their daily tasks and events within standard business hours (9am to 5pm). Users can enter events for specific time blocks, and the application will color-code each time block to indicate whether it is in the past, present, or future. The entered events are saved in the browser's local storage, ensuring that the information persists even after refreshing the page.

User Story
As a user, I want to be able to add important events to the schedule. I expect the previous hours to be grayed out, the current hour to be displayed in red, and future hours to be displayed in green. Additionally, I want the ability to edit events and have the changes saved securely in local storage.

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
Technologies Used
HTML
CSS
JavaScript
jQuery
Day.js
Installation
No installation required. Simply open the index.html file in your web browser to start using the WorkDay Scheduler.

Usage
Upon opening the WorkDay Scheduler, the current day will be displayed at the top of the calendar.
Scroll down to view the time blocks for standard business hours (9am to 5pm).
Each time block will be color-coded to indicate whether it is in the past, present, or future.
Click into a time block to enter an event.
Click the save button for that time block to save the event in local storage.
Refreshing the page will persist the saved events.
<img width="1710" alt="Screenshot 2024-02-12 at 11 50 13 PM" src="https://github.com/SumailaM/WorkDay-Scheduler/assets/142268062/8c854bc5-09fb-40a5-a757-05a701972123">
