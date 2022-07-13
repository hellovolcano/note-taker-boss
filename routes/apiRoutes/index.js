const router = require("express").Router()
const { Router } = require("express")
const notes = require("../../db/db")
const createNewNote = require("../../lib/note")

router.get("/notes", (req, res) => {
    res.json(notes)
})

router.post("/notes", (req, res) => {
    // add an ID so we can eventually handle DELETE requests
    // req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note)

    
})

module.exports = router