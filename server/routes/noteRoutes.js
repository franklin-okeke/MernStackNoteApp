import express from 'express'
import { deleteNote, getAllNotes, postNotes, updateNote,getASpecificNote } from '../controllers/noteControllers.js'

const noteRoutes = express.Router()


noteRoutes.get('/', getAllNotes)
// if a user wants to get a specific note
noteRoutes.get('/:id', getASpecificNote)
noteRoutes.post('/', postNotes)
noteRoutes.put('/:id', updateNote)
noteRoutes.delete('/:id', deleteNote)


export default noteRoutes



