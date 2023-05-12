const { sequence } = require("../lib/array-utils.js");

const totalDaysInMonth = function (monthIndex, year) {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const getFirstDayOfMonth = function(monthIndex, year) {
  return new Date(year, monthIndex, 1).getDay();
}

const getDates = function (monthIndex, year) {
  const totalDays = totalDaysInMonth(monthIndex, year);
  return sequence(totalDays);
};

exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDates = getDates;