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

module.exports = createNewNote