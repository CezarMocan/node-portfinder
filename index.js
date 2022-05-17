var portscanner = require('portscanner')
const commandLineArgs = require('command-line-args')
const fs = require('fs')

const optionDefinitions = [
    { name: 'file', alias: 'f', type: String },
    { name: 'startPort', alias: 'p', type: Number },
    { name: 'range', alias: 'r', type: Number },
]
const options = commandLineArgs(optionDefinitions)

const outputFile = options.file || "./port.txt"
const startPort = options.startPort || 5000
const range = options.range || 100

portscanner.findAPortNotInUse(startPort, startPort + range, '127.0.0.1', function(error, port) {
    console.log(port)
    fs.writeFileSync(outputFile, port.toString(), { encoding: 'utf8' })
})