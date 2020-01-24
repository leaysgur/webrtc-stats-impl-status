const arrayToMarkdownTable = arr => {
  const [head, ...body] = arr;
  const tokens = [
    ["", ...head, ""],
  ];

  tokens.push(["", "--:", ...new Array(head.length - 1).fill().map(() => ":--:"), ""]);

  for (const item of body) {
    const [type, ...rest] = item;
    const implOrNot = rest.map(bool => bool ? "✅" : "");
    tokens.push(["", type, ...implOrNot, ""]);
  }

  return tokens.map(row => row.join(" | ").trim()).join("\n");
};

module.exports = {
  arrayToMarkdownTable
};
