const fs = require('fs')

const getNotes = function() {
    return 'Your Notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    debugger
    //console.log(duplicateNotes)

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })       
        saveNotes(notes)
        console.log('Note title added')
    }
    else {
        console.log('Note title already taken')
    }


    // console.log(notes)
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>  note.title !== title)
    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)      
    })
    }

// const readNotes = () => {
//     const notes = loadNotes()
//     notes.forEach((note) => {
//         console.log(note.title)      
//     })
//     }

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}