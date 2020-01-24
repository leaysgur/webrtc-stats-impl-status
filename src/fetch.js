const fs = require("fs").promises;

const fetchLatestStats = async dumpDir => {
  const browsers = await fs.readdir(dumpDir);

  const ret = [];
  for (const browser of browsers) {
    const stats = await fetchLatestStatsByBrowser(dumpDir, browser);
    ret.push(stats);
  }
  return ret;
};

const fetchLatestStatsByBrowser = async (dumpDir, browser) => {
  const items = await fs.readdir(`${dumpDir}/${browser}`);
  // desc sort, big version number, latest first
  items.sort(() => -1);
  const latest = items[0];
  const [version] = latest.split(".json");

  const json = await fs.readFile(`${dumpDir}/${browser}/${latest}`);
  const stats = JSON.parse(json);

  // remove duplicates
  const uniqueStats = filterDuplicates(stats);

  return {
    browser,
    version,
    stats: uniqueStats
  };
}

const filterDuplicates = stats => {
  const uniqueStats = [];

  const statKeysMap = {};
  for (const stat of stats) {
    const key = Object.keys(stat).sort().join(", ");
    if (key in statKeysMap) continue;
    statKeysMap[key] = 1;
    uniqueStats.push(stat);
  }

  return uniqueStats;
};

module.exports = {
  fetchLatestStats
};
