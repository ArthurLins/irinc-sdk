#! /usr/bin/env node

const Script = require('./script')
const { addOptions, setToken } = require('./utils')

const args = addOptions()
const production = args.p || args.production
const token = args.t || args.token

if (token) {
  return setToken(token)
}

new Script(production)
