const allStrains = require('./data/cannabis.json')
const allConditions = require('./data/conditionsDec.json')


// Query Functions for condition and strain

// condition :: String -> Array
// returns: Array of strains that cure condition
const condition = name => allConditions.find(condition => condition.hasOwnProperty(name))[name]

// strain :: String -> Object
// returns Object with information on strain
// keys -> "type", "rating", "effects", "flavor", "description"
const strain = name => allStrains.filter((ea) => ea.strain === name )[0]


module.exports = {
  condition,
  strain
};