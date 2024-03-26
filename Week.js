// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

var dayOfTheWeek = function (day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const d = new Date(`${month},${day},${year}`);
let dayy = d.getDay()
return days[dayy]

};

let week=dayOfTheWeek(5,9,2004);

console.log(week);