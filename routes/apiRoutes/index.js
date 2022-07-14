const router = require("express").Router()
const { Router } = require("express")
const notes = require("../../db/db")
const { createNewNote, assignUniqueId } = require("../../lib/note")

router.get("/notes", (req, res) => {
    res.json(notes)
})

router.post("/notes", (req, res) => {
    const note = createNewNote(assignUniqueId(req, notes), notes)
    res.json(note)

    
})

module.exports = router