const { fetchLatestStats } = require("./fetch");
const { arrayToMarkdownTable } = require("./markdown");
const { listAllStatsTypes, checkStatsTypeImpl } = require("./stats-type");
const { listAllStatsProps, checkAllStatsPropsImpl } = require("./props");

(async () => {
  const browserLatestStats = await fetchLatestStats("./dump");

  const statsTypes = listAllStatsTypes(browserLatestStats);
  const resArr = checkStatsTypeImpl(statsTypes, browserLatestStats);
  const table = arrayToMarkdownTable(resArr);
  console.log("## RTCStatsType");
  console.log("");
  console.log(table);
  console.log("");

  console.log("## Details");
  console.log("");
  for (const type of statsTypes) {
    const allStatsProps = listAllStatsProps(type, browserLatestStats);
    const resArr = checkAllStatsPropsImpl(allStatsProps, type, browserLatestStats);
    const table = arrayToMarkdownTable(resArr);
    console.log(`### ${type}`);
    console.log("");
    console.log(table);
    console.log("");
  }
})();
