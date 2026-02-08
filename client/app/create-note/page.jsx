"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CreateNote = () => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)


  const createNote = async(e) =>{
     e.preventDefault()

     if(!title.trim() || !content.trim()){
      return toast.error('Note title and Content Required!')
     }
     
     setLoading(true)
     try {
       await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/notes`,{
        title,
        content
       })
       toast.success("Note Created successfuly!")
       router.push('/')

      
     } catch (error) {
       toast.error("Failed to Create Note")
       if(error.response.status === 429){
        toast.error("To Many Request, Try in a few seconds")
       } else{
       toast.error("Failed to Create Note")
       }
     }
     finally{
        setLoading(false)
     }
     
  }



  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
        <Link href='/' className="fixed flex items-center justify-center top-5 left-5 h-12 w-12 rounded-full bg-gray-700 text-[#00FF9D]">
          <FaArrowLeft />
        </Link>

    <form onSubmit={createNote} className=" bg-gray-700  text-white max-w-85 mx-4 p-6 text-left text-sm rounded-xl  border-t-4 border-[#00FF9D]">
    <label className="font-medium">Create New Note</label>
    <input 
    onChange={(e) =>setTitle(e.target.value)}
    value={title}
     className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Note title"/>

    <label className="font-medium text-white">Content</label>
    <textarea 
    onChange={(e) =>setContent(e.target.value)}
    value={content}
    rows="3" id="content" 
    className="w-full resize-none border mt-1.5 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter content"></textarea>
    <div>
         <button
          type="submit" className=" my-3 bg-[#00FF9D] py-2 px-5 rounded text-white font-bold" disabled={loading}>
           {loading ? 'Creating..':'Create'}
          </button>
    </div>
  </form>     
</div>
  )
}

export default CreateNote
