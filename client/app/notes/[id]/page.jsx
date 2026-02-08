"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import Spinner from "@/components/Spinner"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




const NoteDetails = () => {

  const {id} = useParams()
  const router = useRouter()

  const [note, setNote] = useState({
    title:"",
    content:""
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

    useEffect(() =>{
      const fetchNote = async() =>{

        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/${id}`)
          setNote(response.data) 
        } catch 
        (error) {
          toast.error("Failed to fetch note")
        } finally{
          setLoading(false)
        }
      }
      fetchNote()
    },[id])


    const handleDelete = async ()=>{
      if(!window.confirm("Are you sure you want to delete this note?")) return

      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/${id}`)
        toast.success("Note Deleted Successfully!")
        router.push("/")
        
      } catch (error) {
        toast.error("error deleting note")
      }

    }


    const handleSave = async()=>{

      if(!note.title.trim() || !note.content.trim()) {
        return toast.error("All Fields Are Required")
      }
        setSaving(true)
        try {
          await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/${id}`, note)
          toast.success("Note Updated Successfully!")
          router.push("/")
          
        } catch (error) {
          toast.error("Error updating note")
        } finally{
          setSaving(false)
        }
    }


        if(loading){
          return <Spinner/>
        }


  return (
    <div className="bg-gray-900 min-h-screen">
        <div className="mx-auto px-4 py-8">
          <div className="max-w-xl mx-auto">
              

    <form className=" bg-gray-700  text-white max-w-85 mx-4 p-6 text-left text-sm rounded-xl  border-t-4 border-[#00FF9D]">
     <div className="flex items-center justify-between mb-6">
      <Link href='/' className="flex items-center cursor-pointer gap-1">
        <FaArrowLeft className="text-xs"/>
          Back to Home
        </Link>
          <MdDelete 
            onClick={handleDelete}
            className='size-4 cursor-pointer text-xs text-red-500' /> 
      </div>
    <input 
     value={note.title}
     onChange={(e)=>setNote({...note, title:e.target.value})}
     className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Note title"/>

    <label className="font-medium text-white">Content</label>
    <textarea 
    value={note.content}
    onChange={(e) =>setNote({...note, content:e.target.value})}
    rows="3" id="content" 
    className="w-full resize-none border mt-1.5 border-gray-500/30 outline-none rounded py-2.5 px-3" type="text" placeholder="Enter content"></textarea>
    <div>
         <button
          onClick={handleSave}
           className=" my-3 bg-[#00FF9D] cursor-pointer py-2 px-5 rounded text-gray-900 font-bold" disabled={saving}>
           {saving ? 'Saving..':'Save Changes'}
          </button>
    </div>
  </form> 
          </div>

        </div>
    </div>
  )
}

export default NoteDetails
