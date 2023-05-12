const { renderWeeks } = require("./render.js");

const totalDaysInMonth = function (monthIndex, year) {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const generateDates = function(totalDays) {
  return new Array(totalDays).fill().map(function(_, i) {
    return i + 1;
  });
};

const getWeeks = function (monthIndex, year) {
  const totalDays = totalDaysInMonth(monthIndex, year);
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const dates = generateDates(totalDays);
  
  return renderWeeks(dates, firstDayOfMonth);
};

exports.getWeeks = getWeeks;