const { toNumber } = require("./lib/array-utils.js");
const { getWeeks } = require("./src/month.js");
const { renderMonthlyCalendar } = require("./src/render.js");

const main = function() {
  const [ month, year ] = toNumber(process.argv.slice(2));
  const monthIndex = month - 1;
  const weeks = getWeeks(monthIndex, year);
  console.log(weeks);

  console.log(renderMonthlyCalendar(weeks, monthIndex, year));
}

main();