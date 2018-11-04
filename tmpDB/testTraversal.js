const allStrains = require('./cannabis.json')
const allConditions = require('./conditions.json')

// const test = allConditions.filter(eaCond => allStrains.map(eaStrain => eaStrain.strain === eaCond.muscleSpasms ))
// console.log(allConditions.map(ea => ea.strains))

const muscleSpasmsArray = allConditions.map(ea => ea.strains);
console.log(muscleSpasmsArray)