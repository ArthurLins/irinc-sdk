const { rollup } = require('rollup')
const { terser } = require('rollup-plugin-terser')
const { join } = require('path')
const { readdirSync, existsSync } = require('fs')

class Script {
  constructor (production = false) {
    this.production = production
    this.directory = process.cwd()
    this.config = this.getConfig()
    this.exec()
  }

  exec () {
    this.getScript()
      .then(this.deploy)
      .then(() => console.log('Deploy Successfully!'))
  }

  deploy (script) {
    return console.log('TODO: API')
  }

  async getScript () {
    const file = 'index.js'
    const input = await rollup({ input: file })
    const config = this.getOutputConfig()
    const output = await input.generate(config)
    const script = output?.output[0]
    return script?.code
  }

  getConfig () {
    const dir = join(this.directory, 'config.json')

    if (!existsSync(dir)) {
      throw new Error('Missing Config File!')
    }

    return require(dir)
  }

  getFiles () {
    return readdirSync(this.directory)
      .filter(file => file.endsWith('js'))
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
}

module.exports = Script
