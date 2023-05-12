const { chunk } = require("../lib/array-utils.js");

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const justifyRight = function(pad, day) {
  return day.toString().padStart(pad);
}

const getMonthAbbrev = function (monthIndex) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  
  return months[monthIndex];
};

const getHeading = function(monthIndex, year) {
  const monthAbbrev = getMonthAbbrev(monthIndex);
  return [monthAbbrev, year];
}

const renderWeeks = function(dates, firstDayOfMonth) {
  const padStart = new Array(firstDayOfMonth).fill("");
  const padEnd = new Array(42 - (firstDayOfMonth + dates.length)).fill("");

  return chunk([...padStart, ...dates, ...padEnd], 7, 0);
}

const renderLines = function(lines) {
  return lines.map(justifyRight.bind(null,2)).join(" ");
}

const renderMonthlyCalendar = function(weeks, month, year) {
  const monthlyCalendar = [ getHeading(month, year) ];
  monthlyCalendar.push(days, ...weeks);

  return monthlyCalendar.map(renderLines).join('\n');
}

exports.renderWeeks = renderWeeks;
exports.renderMonthlyCalendar = renderMonthlyCalendar;