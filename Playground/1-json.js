const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON=JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// fs.writeFileSync('1-JSON.json', bookJSON)
// console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
const user = JSON.parse(dataJSON)
user.name='Hashim'
user.age='26'
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-JSON.json', userJSON)
//console.log(data.title) // can also create a constant from it before printing to console
