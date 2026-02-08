"use client"
import Navbar from "@/components/Navbar"
import NoteCard from "@/components/NoteCard"
import NoteNotFound from "@/components/NoteNotFound"
import RateLimited from "@/components/RateLimited"
import Spinner from "@/components/Spinner"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"


const Home = () =>{
    const [rateLimited, setRateLimited] = useState(false)

    // to fetch all notes
    const [allNotes, setAllNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
       const fetchAllNotes = async () =>{
        try {
            setLoading(true)
            const response =await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/notes`)
            setAllNotes(response.data)
            
            setLoading(false)
            setRateLimited(false)

        } catch (error) {
          console.log(error.message);
          if(error.response?.status === 429){
            setRateLimited(true)
          } else{
            toast.error("Error fetching Notes")
          }
            
        }finally{
            setLoading(false)
        }

       }
       fetchAllNotes()
    },[])
      

    return(
        <div className="min-h-screen w-full bg-gray-900 ">
            <Navbar/>
            {rateLimited && <RateLimited setRateLimited={setRateLimited} />}

            <div className="max-w-7xl mx-auto p-4 mt-6 ">
                { loading && <Spinner/>}
            </div>
            {allNotes.length === 0 && !rateLimited && <NoteNotFound/>}

            {allNotes.length > 0 && !rateLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  px-4 lg:px-12 mb-8">
                    {allNotes.map((note) =>(   
                         <NoteCard note={note} key={note._id} setAllNotes={setAllNotes}/> 
                    ))}

                </div>
            )}

        </div>
    )
}

export default Home