import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { SiHyperskill } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";

const isActiveLink = ({ isActive }) => `text-[23px] font-semibold flex items-center gap-1 transition-all duration-300 
                                        ${ 
                                            isActive
                                            ? "border rounded-3xl p-1 px-2 bg-black text-white"
                                            : ""

                                        }
                                        `

const Navbar = () => {
  return (
    <>
        <nav className='w-[65%] h-15 border rounded-3xl p-2 flex items-center justify-around'>
            <div className='w-[80%] flex h-full items-center justify-around'>

            <NavLink to="/" className={isActiveLink}>
                <CgProfile size={23} />
                About
            </NavLink>

            <NavLink to="/skills" className={isActiveLink}>
                <SiHyperskill size={23} />
                Skills
            </NavLink>

            <NavLink to="/projects" className={isActiveLink}>
                <FaRegFolderOpen size={23} />
                Projects
            </NavLink>

            <NavLink to="/contact" className={isActiveLink}>
                <RiContactsFill size={23} />
                Contact
            </NavLink>

            </div>
        </nav>
    </>
  )
}

export default Navbar