const { getDates } = require("./src/month.js");
const { renderMonthlyCalendar } = require("./src/render.js");

const main = function() {
  const month = parseInt(process.argv[2]);
  const year = parseInt(process.argv[3]);
  
  const monthIndex = month - 1;
  const dates = getDates(monthIndex, year);

  console.log(renderMonthlyCalendar(dates, monthIndex, year));
}

main();