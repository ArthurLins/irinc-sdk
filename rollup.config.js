import resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'input',
	output: [
		{
			format: 'cjs',
			name: 'script',
			file: 'output/script.js'
		}
	],
	plugins: [
    resolve()
  ]
}