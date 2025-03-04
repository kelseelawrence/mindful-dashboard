// website loaded?
console.log("👍 Okay");

const eventDate = "2025-06-14"; // ✅ Use const to prevent redeclaration

document.addEventListener("DOMContentLoaded", () => {
  const daysUntilEvent = getDaysUntilEvent(eventDate);
  console.log(`Days until event: ${daysUntilEvent}`);
  document.getElementById('days-until-event').textContent = `Days until event: ${daysUntilEvent}`;
});

function getDaysUntilEvent(eventDate) {
  const now = new Date();
  const event = new Date(eventDate);
  now.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);
  return Math.ceil((event - now) / (1000 * 60 * 60 * 24));
}

// // Define eventDate
//  eventDate = "2025-06-14";

// // Days Until an Event
// const daysUntilEvent = getDaysUntilEvent(eventDate);
// console.log(`Days until event: ${daysUntilEvent}`);

// // Update the DOM with the result
// document.getElementById('days-until-event').textContent = `Days until event: ${daysUntilEvent}`;

// Streak of Days


// Age of Person, Place, or Thing
// Unit Test
const birthDate = "1973-09-29"; // YYYY-MM-DD format
// const birthDateOfSwoop = "September 29, 1973"; // Month DD, YYYY
// const birthDateOfSwoop = "09/09/1973"; // MM/DD/YYYY
const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );


