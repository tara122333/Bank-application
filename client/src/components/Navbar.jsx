import React from 'react'
import { useState } from 'react';
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'

const Navbar = () => {
    const navLinks = [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "features",
          title: "Features",
        },
        {
          id: "product",
          title: "Product",
        },
        {
          id: "clients",
          title: "Clients",
        },
      ];

      const [toggle,setToggle] = useState(false);
  return (
    <>
        <nav className='flex justify-between w-full items-center py-3 md:py-4 lg:py-6'>
            <div className="w-[124px] h-[32px]">
                {/* <img src={logo} alt="logo" className='w-full h-full'/>
                 */}
                 <h1 className='font-poppins font-bold text-gradient text-2xl'>TaraBank</h1>
            </div>
            <ul className='hidden  lg:flex items-center list-none justify-end'>
                {
                    navLinks.map((item)=>(
                        <li className='text-xl font-poppins text-white mx-6 cursor-pointer'>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='lg:hidden flex'>
                <div onClick={(()=>setToggle(!toggle))} className='text-white flex justify-center items-center'>
                    
                    {
                        toggle ? <IoClose className='text-3xl'/> : <BiMenu className='text-3xl' />
                    }
                </div>
                <div className={`${!toggle ? "hidden" : "flex" } absolute top-12 right-0 bg-black-gradient mx-4 my-2 p-4 py-6 min-w-[140px] rounded-xl sidebar text-black`}>
                    <ul className='lg:hidden items-center list-none justify-end'>
                        {
                            navLinks.map((item)=>(
                                <li className='text-lg font-poppins text-white font-medium cursor-pointer mx-6 my-2 outline-none'>
                                    <a href={`#${item.id}`} onClick={()=>setToggle(false)}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar