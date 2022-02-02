const { rollup } = require('rollup')
const { terser } = require('rollup-plugin-terser')
const { existsSync, readFileSync } = require('fs')
const { join } = require('path')
const axios = require('axios')

class Script {
  constructor (production = false) {
    this.production = production
    this.url = 'https://ironhotel.biz'
    this.directory = process.cwd()
    this.config = this.getFile(this.directory, 'config.json')
    this.token = this.getFile(__dirname, '.token', true)
    this.exec()
  }

  exec () {
    this.getScript()
      .then(this.deploy)
      .then(() => console.log('Deploy Successfully!'))
  }

  deploy (script) {
    const roomid = this.config.roomid
    const url = `${this.url}/uploadScript?roomid=${roomid}`
    const options = {
      method: 'GET',
      headers: { 'token': this.token },
      data: script,
      url,
    }

    axios(options)
  }

  async getScript () {
    const file = 'index.js'
    const input = await rollup({ input: file })
    const config = this.getOutputConfig()
    const output = await input.generate(config)
    const script = output?.output[0]
    return script?.code
  }

  getOutputConfig () {
    const config = {
      format: 'cjs',
      file: 'script.js'
    }

    if (this.production) {
      const options = {
        toplevel: false,
        mangle: false,
        compress: false
      }
      config.plugins = [terser(options)]
    }

    return config
  }

  getFile (directory, file, read) {
    const dir = join(directory, file)

    if (!existsSync(dir)) {
      const err = new Error(`Missing ${file}!`)
      throw err
    }

    if (!read) {
      return require(dir)
    }

    return readFileSync(dir, 'utf-8')
  }
}

module.exports = Script
