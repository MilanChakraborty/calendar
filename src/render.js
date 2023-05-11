const { getMonthAbbrev } = require("./month");

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const justifyRight = function(day) {
  return day.toString().padStart(2);
}

const getHeading = function(month, year) {
  const monthAbbrev = getMonthAbbrev(month);
  return [monthAbbrev, year];
}

const renderLines = function(lines) {
  return lines.map(justifyRight).join(" ");
}

const renderMonthlyCalendar = function(weeks, month, year) {
  let monthlyCalendar = [getHeading(month, year)];
  monthlyCalendar.push(days);
  monthlyCalendar.push(...weeks);

  return monthlyCalendar.map(renderLines).join('\n');
}

exports.renderMonthlyCalendar = renderMonthlyCalendar;