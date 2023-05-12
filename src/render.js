const { chunk, repeat } = require("../lib/array-utils.js");
const { getFirstDayOfMonth } = require("./month.js");

const justifyRight = function(pad, day) {
  return day.toString().padStart(pad);
}

const renderLines = function(lines) {
  return lines.map(justifyRight.bind(null,2)).join(" ");
}

const getMonth = function (monthIndex) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  
  return months[monthIndex];
};

const getHeading = function(monthIndex, year) {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const month = getMonth(monthIndex);
  return [[month, year], days];
}

const renderWeeks = function(dates, monthIndex, year) {
  const maxGridSize = 42;
  const firstDayOfMonth = getFirstDayOfMonth(monthIndex, year);

  const padStart = repeat("", firstDayOfMonth);
  const padEndSize = maxGridSize - (firstDayOfMonth + dates.length);
  const padEnd = repeat("", padEndSize);

  return chunk([...padStart, ...dates, ...padEnd], 7, 0);
}

const renderMonthlyCalendar = function(dates, monthIndex, year) {
  const weeks = renderWeeks(dates, monthIndex, year);
  const monthlyCalendar = [ ...getHeading(monthIndex, year), ...weeks ];

  return monthlyCalendar.map(renderLines).join('\n');
}

exports.renderMonthlyCalendar = renderMonthlyCalendar;