#! /usr/bin/env node

const Script = require('./script')
const { addOptions, setToken, newScript } = require('./utils')

const args = addOptions()
const production = args.p || args.production
const token = args.t || args.token
const newscp = args.n || args.new

if (token) {
  return setToken(token)
}

if (newscp) {
	return newScript(newscp)
}

new Script(production)
