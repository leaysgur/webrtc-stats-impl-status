const { fetchLatestStats } = require("./fetch");
const { listAllStatsTypes, checkStatsTypeImpl } = require("./stats-type");
const { arrayToMarkdownTable, renderMarkdown } = require("./markdown");

const listAllStatsProps = (type, browserLatestStats) => {
  const props = new Set();
  for (const item of browserLatestStats) {
    for (const stat of item.stats.filter(s => s.type === type)) {
      for (const key of Object.keys(stat)) {
         props.add(key);
      }
    }
  }

  return [...props].sort((a, b) => a.length > b.length ? 1 : -1);
};

const checkAllStatsPropsImpl = (statsProps, type, browserLatestStats) => {
  const rows = [
    // type, chrome, edge
    ["", ...browserLatestStats.map(i => `${i.browser} v${i.version}`)],
    // codec, o, x
  ];
  for (const prop of statsProps) {
    const row = [prop];
    rows.push(row);
    for (const item of browserLatestStats) {
      const targetStats = item.stats.filter(s => s.type === type);
      if (targetStats.length === 0) {
        row.push(false);
      } else {
        let typeExists = false;
        for (const stat of targetStats) {
          if (Object.keys(stat).includes(prop)) typeExists = true;
        }
        row.push(typeExists);
      }
    }
  }

  return rows;
};

(async () => {
  const browserLatestStats = await fetchLatestStats("./dump");

  const statsTypes = listAllStatsTypes(browserLatestStats);
  const resArr = checkStatsTypeImpl(statsTypes, browserLatestStats);
  const table = arrayToMarkdownTable(resArr);
  renderMarkdown("## RTCStatsType", table);

  renderMarkdown("## Details", "");
  for (const type of statsTypes) {
    const allStatsProps = listAllStatsProps(type, browserLatestStats);
    const resArr = checkAllStatsPropsImpl(allStatsProps, type, browserLatestStats);
    const table = arrayToMarkdownTable(resArr);
    renderMarkdown(`### ${type}`, table);
  }
})();
