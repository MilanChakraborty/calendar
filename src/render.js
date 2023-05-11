const { getMonthAbbrev } = require("./month");

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const justifyRight = function(pad, day) {
  return day.toString().padStart(pad);
}

const getHeading = function(month, year) {
  const monthAbbrev = getMonthAbbrev(month);
  return [monthAbbrev, year];
}

const renderLines = function(lines) {
  return lines.map(justifyRight.bind(null,2)).join(" ");
}

const renderMonthlyCalendar = function(weeks, month, year) {
  const monthlyCalendar = [getHeading(month, year)];
  monthlyCalendar.push(days);
  monthlyCalendar.push(...weeks);

  return monthlyCalendar.map(renderLines).join('\n');
}

exports.renderMonthlyCalendar = renderMonthlyCalendar;