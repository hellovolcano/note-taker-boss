const router = require("express").Router()
const { Router } = require("express")
const notes = require("../../db/db")
const { createNewNote, assignUniqueId, deleteNote } = require("../../lib/note")

router.get("/notes", (req, res) => {
    res.json(notes)
})

router.post("/notes", (req, res) => {
    const note = createNewNote(assignUniqueId(req, notes), notes)
    res.json(note)
    
})

router.delete("/notes/:id", (req, res) => {
    const newNotesList = deleteNote(req.params.id, notes)
    res.json(newNotesList)
})

module.exports = router