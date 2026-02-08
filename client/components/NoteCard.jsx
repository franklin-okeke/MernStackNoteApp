import Link from 'next/link'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { formatDate } from './lib/utils';
import axios from 'axios';
import toast from 'react-hot-toast';


const NoteCard = ({note, setAllNotes}) => {

  const deleteNote = async (e, id) =>{
        e.preventDefault()  //aviod navigating us

        if(!window.confirm("Are you sure you want to delete this note?")) return

        try {
          await axios.delete(`http://localhost:8080/api/notes/${id}`)
          setAllNotes((prev) =>prev.filter(note =>note._id !== id))
          toast.success("Note Deleted Successfuly!")
          
        } catch (error) {
           toast.error("Error Deleting Note")
        } 
  }


  return (
    <Link href={`/notes/${note._id}`}
    className='bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'
    >
       <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-semibold text-white'>{note.title}</h1>
            <p className='line-clamp-3 text-gray-300'>{note.content}</p>

            <div className='flex items-center justify-between mt-6'>
                <span className='text-sm text-gray-300 '>
                    {formatDate(note.createdAt)}
                </span>
                <div className='flex items-center gap-2'>
                    <FaRegEdit 
                    className='size-4 text-xs text-gray-300' />

                    <MdDelete 
                    onClick={(e) =>deleteNote(e, note._id)}
                    className='size-4 text-xs text-red-500' />
                </div>
            </div>
       </div>
      
    </Link>
  )
}

export default NoteCard
