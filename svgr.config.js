// .svgrrc.js
module.exports = {
	icon: 24,
	typescript: true,
	outDir: "./src/icons",
	svgo: true,
	index: false,
	replaceAttrValues : {
		"#fff": "currentColor",
	},
	ref: false
}