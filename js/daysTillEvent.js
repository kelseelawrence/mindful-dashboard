// Function
const getDaysUntilEvent = (eventDate) => {
  // Create Date objects for now and the event
  const now = new Date();
  const event = new Date(eventDate);

  // Clear time portion for accurate day calculation
  now.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);

  console.log(`Current date: ${now}`);
  console.log(`Event date: ${event}`);

  // Calculate difference in milliseconds
  const diffInTime = event.getTime() - now.getTime();
  console.log(`Difference in time (ms): ${diffInTime}`);

  // Convert to days
  const daysUntil = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  return daysUntil;
};

// Call the function after defining it
let eventDate = "2025-06-14";
const daysUntilEvent = getDaysUntilEvent(eventDate);
console.log(`Days until event: ${daysUntilEvent}`);

