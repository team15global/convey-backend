const allConditions = require('./conditionsDec.json')


const flatten = arr => [].concat(...arr);
const flatten2 = arr => [...arr]

const newList = flatten(allConditions);

// require("fs").writeFileSync("./conditions2.json", JSON.stringify(newList, null, 2), 'utf8')