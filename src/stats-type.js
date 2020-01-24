const listAllStatsTypes = browserLatestStats => {
  const statsTypes = new Set();
  for (const item of browserLatestStats) {
    for (const stat of item.stats) {
      statsTypes.add(stat.type);
    }
  }

  return [...statsTypes].sort(a => a.split("-").length > 1 ? 1 : -1);
};

const checkStatsTypeImpl = (statsTypes, browserLatestStats) => {
  const rows = [
    // type, chrome, edge
    ["", ...browserLatestStats.map(i => `${i.browser} v${i.version}`)],
    // codec, o, x
  ];
  for (const type of statsTypes) {
    const row = [type];
    rows.push(row);
    for (const { stats } of browserLatestStats) {
      const typeExists = stats.some(stat => stat.type === type);
      row.push(typeExists);
    }
  }

  return rows;
};

module.exports = {
  listAllStatsTypes,
  checkStatsTypeImpl
};
