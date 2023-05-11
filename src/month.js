const { chunk } = require("../lib/array-utils.js");

const getMonthAbbrev = function (monthIndex) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  
  return months[monthIndex];
};

const getTotalDays = function (monthIndex, year) {
  return new Date(year, monthIndex + 1).getUTCDate();
};

const generateDates = function(totalDays) {
  return new Array(totalDays).fill().map(function(_, i) {
    return i + 1;
  });
};

const getWeeks = function (monthIndex, year) {
  const totalDays = getTotalDays(monthIndex, year);
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  const padding = new Array(firstDayOfMonth).fill("");
  const dates = generateDates(totalDays);

  return chunk([...padding, ...dates], 7, 0);
};

exports.getWeeks = getWeeks;
exports.getMonthAbbrev = getMonthAbbrev;