// Function to calculate days until the event
function getDaysUntilEvent(eventDate) {
  const event = new Date(eventDate);
  const today = new Date();

  // Calculate the difference in time
  const timeDifference = event - today;

  // Convert milliseconds to days
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

// Function
const eventDate = "2025-06-14";
const daysUntilEvent = getDaysUntilEvent(eventDate);
console.log( daysUntilEvent );

// Get HTML element
const elem = document.querySelector('.daysUntilEvent');

// Set to HTML
elem.textContent = daysUntilEvent;
elem.setAttribute("datetime", eventDate );
