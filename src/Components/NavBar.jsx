import React from "react";
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import axios from "axios";


const NavBar = ({setArticles}) => {
    const [open, setOpen] = React.useState(false);
    const handleSearch = async(e) => {
      const search = e.target.value
      try {
          const res = await axios.get(`https://gnews.io/api/v4/search?q=${search}&lang=en&max=12&apikey=${import.meta.env.VITE_NEWS_API_KEY}`);
          setArticles(res.data.articles)
      }
      catch(error){
        console.log(error)
      }
    }
    return(
        <div className=" bg-gray-800 w-full h-12">
            <div className=" flex justify-between">
                <div className=" flex justify-center items-center p-1 font-medium pl-7 text-2xl text-white">NewsPulse.</div>
                <div className="hidden md:flex justify-center items-center">
                        
                    <ul className="flex justify-between items-center gap-5 p-3 cursor-pointer font-medium text-1xl">
                        <Link  to='/general'><li className="text-white hover:text-blue-500">General</li></Link>
                        <Link to ='/business'><li className="text-white hover:text-blue-500">Business</li></Link>
                        <Link to='/entertainment'><li className="text-white hover:text-blue-500">Entertainment</li></Link>
                        <Link to='/sports'><li className="text-white hover:text-blue-500">Sports</li></Link>   
                        <Link to='/health'><li className="text-white hover:text-blue-500">Health</li></Link>
                        <Link to='/science'><li className="text-white hover:text-blue-500">Science</li></Link>
                    </ul>
                </div>
 
                <div className="pr-20 m-1"><input onChange={handleSearch} type="text" className=" w-50 bg-gray-200 outline-none focus:outline-none pl-3 m-1 mt-2 rounded-lg p-1" placeholder="Search..."></input></div>
            </div>
            
        
                
        <div className="md:hidden">           
      {/* Navbar */}
      <div className="absolute top-0 right-0 text-white p-3">
        
        <button  onClick={() => setOpen(!open)}>
          <FaBars size={28} />
        </button>
      </div>
    
      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-0 w-48 h-100 bg-white shadow-lg rounded-lg p-2 z-50">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button onClick={() => setOpen(!open)}>
              <FaTimes size={20} />
            </button>
          </div>
           <ul className="flex flex-col gap-7 p-3  cursor-pointer font-medium text-[20px] ">
                        <Link to='/general'><li>General</li></Link>
                        <Link to ='/business'><li>Business</li></Link>
                        <Link to='/entertainment'><li>Entertainment</li></Link>
                        <Link to='/sports'><li>Sports</li></Link>
                        <Link to='/health'><li>Health</li></Link>
                        <Link to='/science'><li>Science</li></Link>
                    </ul>
        </div>
      )}
            </div>
            </div>
        )
 
   
    
             
}

export default NavBar;
