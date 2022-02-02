const yargs = require('yargs')
const { writeFileSync } = require('fs')

const addOptions = () => {
  const usage = '\nUsage: irinc - Deploy code'
  
  const prod = {
    alias: 'production',
    describe: 'Minimize file before deploy.',
    type: 'boolean'
  }
  
  const token = {
    alias: 'token',
    describe: 'Set token ',
    type: 'string'
  }
  
  return yargs
    .usage(usage)
    .option('p', prod)
    .option('t', token)
    .help(true)
    .argv
}

const setToken = token => {
  writeFileSync(__dirname + '/.token', token)
  console.log('Token successfully setted!')
}

module.exports = { addOptions, setToken }
