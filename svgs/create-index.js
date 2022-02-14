
const fs = require("fs")
const path = require("path")

const getAllFiles = function (dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath)

	arrayOfFiles = arrayOfFiles || []

	files.forEach(function (file) {
		if (fs.statSync(dirPath + "/" + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
		} else {
			arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
		}
	})

	return arrayOfFiles
}

function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const writeIndexFile = function (fileNames) {
	const indexFile = `
import React from "react"
${fileNames.map(
	(fileName) => {
		const iconsPath = '/src/icons/'
		fileName = fileName.replace(/\..+$/g, "").replace(path.resolve(__dirname), "")
		fileName = fileName.substr(fileName.indexOf(iconsPath)).replace(iconsPath, '')
		const [folderName, ...fileNameArr] = String(fileName).split('/')
		const ComponentName = capitalizeFirstLetter(camelize(fileNameArr.join(' ')))
		return `import ${ComponentName} from "./${fileName}";`
	}
).join("\n")}
	`

	fs.writeFileSync(path.resolve(__dirname, "../src/icons/index.ts"), indexFile)
}
console.log(path.resolve(__dirname))
writeIndexFile(getAllFiles(path.resolve(__dirname, "../src/icons")))