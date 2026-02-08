import Notes from "../models/Note.js"


// Endpoint to get all notes
export const getAllNotes = async(req, res) =>{
    
    try {
        const notes = await Notes.find().sort({createdAt:-1}) //newest first
        res.status(200).json(notes) 
    } 
    catch (error) {
      res.status(500).json({success:'false', message:error.message})  
    }
}

// Endpoint to create a notes
export const postNotes = async(req, res) =>{

   try {
    const {title, content} = req.body
    const newNotes = Notes({title, content})
    await newNotes.save()
    res.status(201).json({success:'true', message:'Note Created Successfully!'})
     
   } catch (error) {
      res.status(500).json({success:'false', message:error.message})  
   }
}

// Endpoint to update a post
export const updateNote = async(req,res) =>{
   try {
    const {title, content} = req.body
   const updatedNote = await Notes.findByIdAndUpdate(req.params.id,{title, content},{new: true})

   if(!updatedNote) return res.status(404).json({success:'false', message:'Note not found'})
    res.status(200).json(updatedNote)
    
   } catch (error) {
      res.status(500).json({success:'false', message:error.message})  
    
   }
}

// Endpoint to delete a post
export const deleteNote = async(req,res) =>{
    try {
       const deletedNote = await Notes.findByIdAndDelete(req.params.id)

       if(!deletedNote) return res.status(404).json({success:'false', message:'Note not found'})

        res.status(200).json({success:'true', message:'Note deleted Successfully!'})
        
    } catch (error) {
      res.status(500).json({success:'false', message:error.message})  
        
    }
}

// Endpoint to get a specific note
export const getASpecificNote = async(req, res) =>{
    try {
        const aNote = await Notes.findById(req.params.id)

        if(!aNote) return res.status(404).json({success: 'false', message:'Note not Found'})
        
        res.status(200).json(aNote)
        
    } catch (error) {
      res.status(500).json({success:'false', message:error.message})  
        
    }
}


