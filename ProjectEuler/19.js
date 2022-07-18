function countingSundays(firstYear, lastYear) {
  // Function to test for leap year
  function isLeapYear(year) {
    return year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0);
  }

  // Function for number of days for each month, in each year
  function daysInMonth(month, year) {
    switch (month) {
      case 0: return 31;
      case 1: return isLeapYear(year) ? 29 : 28;
      case 2: return 31;
      case 3: return 30;
      case 4: return 31;
      case 5: return 30;
      case 6: return 31;
      case 7: return 31;
      case 8: return 30;
      case 9: return 31;
      case 10: return 30;
      case 11: return 31;
    }
  }

  // Number of days between 1 Jan 1900 and 1 Jan firstYear
  let daysUpToFirst = 0;
  for (let year = 1900; year < firstYear; year++) {
    daysUpToFirst += isLeapYear(year) ? 366 : 365
  }

  let firstDay = daysUpToFirst % 7 + 1; // Day of the week corresponding to 1 Jan firstYear (1 = monday, 2 = thursday ...) *1 Jan 1900 was Monday

  // Check each first day of the month to see if it is a Sunday
  let firstOfMonth = firstDay;
  let numberOfSundays = 0;
  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month < 12; month++) {
      if (firstOfMonth % 7 === 0) numberOfSundays++;
      firstOfMonth += daysInMonth(month, year);
    }
  }

  return numberOfSundays;
}

console.log(countingSundays(1943, 1946));
