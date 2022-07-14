const notes = require('../db/db.json')
const fs = require('fs')
const path = require('path')

const createNewNote = (body, notes) => {
    const note = body
    notes.push(note)

    // write to the JSON fileto persist
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    return note
}

const assignUniqueId = (req, notes) => {
    // add an ID to the note
    req.body.id = (notes.length + 1).toString()

    // check to ensure the ID doesn't already exist in the list
    let idExists = notes.findIndex((note) => {
        return note.id == req.body.id
    })

    // TODO: Refactor this section to see if I really need the if/else + do/while combo 
    // -- could I somehow just call the do/while without it incrementing on the first run?
    if (idExists === -1) {
        return req.body
    } else {
        // use a do while loop to continuously check whether the ID exists before we complete the assignment
        do {
            req.body.id++

            idExists = notes.findIndex((note) => {
                return note.id == req.body.id
            })
        }
        while (idExists !== -1) 
        // change id back to a string
        req.body.id = req.body.id.toString()

        return req.body
    }
}

const deleteNote = (id, notes) => {
    // find the index of the id we want to delete
    let idIndex = notes.findIndex(note => {
        return note.id == id
    })

    // remove it from the json file
    notes.splice(idIndex, 1)
    // write the new filtered data set to the JSON file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    
    return notes
}

module.exports = { createNewNote, assignUniqueId, deleteNote }