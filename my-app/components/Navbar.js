import { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div class="flex-1 mb-6 text-black">
              <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">

                <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                  <path
                    class="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                Dream Event
              </a>
            </div>
            <div className="flex flex-col ml-4 ">
                <a className="text-xl my-4 font-semibold italic" href="/clientHome" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Services
                </a>
                <a className="text-xl  my-4 font-semibold italic" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl my-4 font-semibold italic" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Gallery
                </a>
                <a href="addAgency" className="text-xl  my-4 font-semibold italic"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Become an agency
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center lg:grid lg:grid-cols-3">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className=" flex  items-center">
            <div class="  text-black">
              <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">

                <svg class="h-6 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                  <path
                    class="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                Dream Event
              </a>
            </div>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex italic font-bold text-lg" >
                    <NavLink to="/clientHome">
                      Services
                    </NavLink>
                    
                    <NavLink to="/About">
                        ABOUT
                    </NavLink>
                    
                    <NavLink to="/Gallery">
                        Gallery
                    </NavLink>
                </div>
            </div>
            <div className=' ml-40 hidden md:flex italic font-meduim'>
            <NavLink to="addAgency">
            <button class="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-rose-500 border-rose-400 shadow-rose-300/30 hover:bg-rose-500 hover:text-rose-100">Add Your Agency</button>

                    </NavLink>
                   
                    <a href="newLogin">
                 <FaUserCircle size={34}  /> 
                 </a>
            </div>
        </nav>
    )
}