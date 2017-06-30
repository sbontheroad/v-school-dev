let multTable = () => {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push([]);
    for(let y = 1; y <= 10; y++) {
      let mult = i * y;
      table[i - 1].push(mult);
    }

  }
  console.log(table);
  return table;
};

// multTable();

module.exports = multTable;
