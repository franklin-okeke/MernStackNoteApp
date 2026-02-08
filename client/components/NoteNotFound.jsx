import Link from "next/link";
import { SlNotebook } from "react-icons/sl";

const NoteNotFound = () => {
  return (

    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
        <div className='rounded-full p-6 bg-green-800'>
             <SlNotebook className="size-10 text-[#00FF9D]" />
        </div>
        <h1 className="text-2xl text-white font-bold">No Notes Yet</h1>
        <p className="text-gray-300 px-4">
          Ready to organise your thoughts? Create your first note
          to get started on the journey
        </p>
        <Link href='/create-note'
        className="bg-[#00FF9D] font-bold px-4 py-2 rounded-full text-gray-900"
        >
            Create your first Note
        </Link>
      
    </div>
  )
}

export default NoteNotFound
