const removeFromArray = function(...args) {
  let list = args[0];
  let newList = [];

  for (let vari of list) {
    if (!args.includes(vari)) {
      newList.push(vari);
    };
  };

  return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
