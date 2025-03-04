import { getDaysUntilEvent } from './daysTillEvent.js';

// website loaded?
console.log("👍 Okay");

// Define eventDate
let eventDate = "2025-06-14";

// Days Until Event
const daysUntilEvent = getDaysUntilEvent(eventDate);
console.log(`Days until event: ${daysUntilEvent}`);

// Get the element where you want to display the result
const displayElement = document.getElementById("daysUntilEvent");

// Set the text content of that element to show the result
displayElement.textContent = `Days until event: ${daysUntilEvent}`;