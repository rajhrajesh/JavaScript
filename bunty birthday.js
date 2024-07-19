const birthdaysList = ["2000-06-13", "1998-06-13", "2000-06-14", "2000-05-13"];
const buntyBirthday = new Date("2000-06-13");

/* Please do not modify anything above this line */

// Initialize result object to store counts
let result = {
  days: 0,
  months: 0,
  years: 0,
};

// Iterate over each birthday in the birthdaysList
birthdaysList.forEach((date) => {
  // Convert each birthday string to a Date object
  const birthday = new Date(date);

  // Check if the birthday matches Bunty's birthday in terms of day, month, and year
  const sameDay = birthday.getDate() === buntyBirthday.getDate();
  const sameMonth = birthday.getMonth() === buntyBirthday.getMonth();
  const sameYear = birthday.getFullYear() === buntyBirthday.getFullYear();

  // Increment the corresponding count in result object based on the matches
  if (sameDay && sameMonth) {
    result.days++;
  }
  if (sameMonth) {
    result.months++;
  }
  if (sameYear) {
    result.years++;
  }
});

// Output the counts of matching birthdays
console.log(result.days);
console.log(result.months);
console.log(result.years);
