document.addEventListener('DOMContentLoaded', function() {
  // Display the current day
  var currentDayElement = document.getElementById('currentDay');
  currentDayElement.textContent = moment().format('dddd, MMMM Do YYYY');

  // Generate time blocks
  var timeBlocksContainer = document.querySelector('.time-blocks');
  for (var hour = 9; hour <= 17; hour++) {
      var timeBlock = document.createElement('div');
      timeBlock.classList.add('time-block');
      timeBlock.setAttribute('data-hour', hour);
      timeBlock.innerHTML = `
          <div class="hour">${hour}:00</div>
          <textarea class="event-description" placeholder="Enter event..."></textarea>
          <button class="save-btn">Save</button>
      `;
      timeBlocksContainer.appendChild(timeBlock);
  }

  // Color-code time blocks based on past, present, or future
  var currentHour = moment().hour();
  var timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(function(timeBlock) {
      var blockHour = parseInt(timeBlock.getAttribute('data-hour'));
      if (blockHour < currentHour) {
          timeBlock.classList.add('past');
      } else if (blockHour === currentHour) {
          timeBlock.classList.add('present');
      } else {
          timeBlock.classList.add('future');
      }
  });

  // Event handling for saving events
  var saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(function(saveButton) {
      saveButton.addEventListener('click', function() {
          var timeBlock = this.closest('.time-block');
          var hour = timeBlock.getAttribute('data-hour');
          var eventDescription = timeBlock.querySelector('.event-description').value;
          localStorage.setItem('event_' + hour, eventDescription);
      });
  });

  // Populate time blocks with saved events
  for (var i = 9; i <= 17; i++) {
      var savedEvent = localStorage.getItem('event_' + i);
      if (savedEvent !== null) {
          var timeBlock = document.querySelector(`.time-block[data-hour="${i}"]`);
          timeBlock.querySelector('.event-description').value = savedEvent;
      }
  }
});
