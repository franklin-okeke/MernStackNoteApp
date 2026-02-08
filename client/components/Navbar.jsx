import Link from "next/link"


const Navbar = () => {    

  return (
    <nav className="bg-gray-800 h-17.5 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20  text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <Link href="/" className="text-[#00FF9D] text-lg md:text-2xl font-bold">
       PenDown
    </Link>

   
    <Link href='/create-note' 
    className="px-4 py-3 bg-green-700 text-white font-bold cursor-pointer  text-xs hover:bg-green-900  rounded-full">
        <span className="text-xs">+ </span>
        New Note  
    </Link>
 
   </nav>

  
    


  )
}

export default Navbar
