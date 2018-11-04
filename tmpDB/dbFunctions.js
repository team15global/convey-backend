const allStrains = require('./data/cannabis.json')
const allConditions = require('./data/conditionsDec.json')

// Destructoring options -> I could destructure all of them
const {
  glaucoma
} = allConditions;

// Query Function for condition
const condition = name => allConditions.find(condition => condition.hasOwnProperty(name))[name]

const keys = obj => Object.keys(obj);
// 


// 1. Map over the array
// 2. chop off head
// 3. 


// const strainInfo = name => {
//   let keys = Object.keys(name).pop()
//   allStrains   
//     .map(ea)
//     console.log(test)
// }
// strainInfo(keys)

// strain('1024') // {"Type": 'hybrid', ...}

// Example Query
const eyePressure = condition("eyePressure")


exports.condition = condition;