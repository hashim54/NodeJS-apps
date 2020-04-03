// CODING EXERCIZES FROM UDEMY

//NODE JS MODULE NAME
// const fs = require('fs')
// const validator = require('validator')
// const chalk = require('chalk')
// const yargs = require('yargs')

// const notes = require('./utils/notes.js')

//const msg = getNotes()

// console.log(validator.isEmail('hashim5.com'))
// const blMsg = chalk.red.bold('Hello World! Hows COVID going')
// console.log(blMsg)

//fs.writeFileSync('notes.txt','HELLO WORLD')
//fs.appendFileSync('notes.txt','FUCK COVID')

//FILE SYSTEM AND COMMAND LINE ARGUMENTS

//const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding...')
// } else if (command === 'remove') {
//     console.log('Removing...')
// }
//console.log(process.argv)
//YARGS has tonne of useful parsing options for user inputs
// yargs.command(
//     {
//         command: 'add',
//         describe: 'Add a new note',
//         builder: {
//             title: {
//                 describe: 'Note title', 
//                 demandOption: true,
//                 type: 'string'
//             },
//             body:{
//                 describe:'Note body',
//                 demandOption: true,
//                 type: 'string'
//             }
//         },
//         handler(argv){ 
//             notes.addNote(argv.title,argv.body)
//         }
    
//     }
// )

// yargs.command(
//     {
//         command: 'remove',
//         describe: 'Remove an old note',
//         builder: {
//             title: {
//                 describe: 'Note title', 
//                 demandOption: true,
//                 type: 'string'
//             }
//         },
//         handler: function(argv){
//             notes.removeNote(argv.title)
//         }
//     }
// )

// yargs.command(
//     {
//         command: 'list',
//         describe: 'List a note',
//         handler: function(){
//             notes.listNotes()
//         }
//     }
// )


// yargs.command(
//     {
//         command: 'read',
//         describe: 'Read an old note',
//         handler: function(){
//             console.log('Reading an old note!')
//         }
//     }
// )

// console.log(yargs.argv)

// ASYNCHRONOUS PROGRAMMING. THIS ILLUSTRATES THE NON-BLOCKING NATURE 

// console.log('starting')

// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 seconds timer')
// }, 0)

// console.log('stopping')

//HTTP REQUESTS
// const request = require ('request')
// const url = 'https://api.darksky.net/forecast/5cd74e21e0c16fb31434678d33c75e0b/37.8267,-122.4233?units=si'

// request ({ url: url, json: true} , (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is current '+response.body.currently.temperature +' degrees outside')
// })

