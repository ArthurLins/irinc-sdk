const yargs = require('yargs')
const { writeFileSync, mkdirSync, existsSync } = require('fs')
const { join } = require('path')

const addOptions = () => {
  const usage = '\nUsage: irinc - Deploy code'
	const opts = require('./options.json')

  return yargs
    .usage(usage)
		.options(opts)
    .help(true)
    .argv
}

const setToken = token => {
  writeFileSync(__dirname + '/.token', token)
  console.log('Token successfully setted!')
}

const newScript = name => {
	const directory = process.cwd()
	const resolved = join(directory, name)

	if (!existsSync(resolved)) {
		mkdirSync(resolved)	
	}

	writeFileSync(join(resolved, 'index.js'), '')
	writeFileSync(join(resolved, 'config.json'), '{ "roomid": 0 }')

	console.log('New script created Successfully!')
}

module.exports = { addOptions, setToken, newScript }
