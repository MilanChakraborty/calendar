const { chunk } = require("../lib/array-utils.js");

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

  const padding = new Array(firstDayOfMonth).fill("");
  const dates = generateDates(totalDays);

  return chunk([...padding, ...dates], 7, 0);
};

exports.getWeeks = getWeeks;