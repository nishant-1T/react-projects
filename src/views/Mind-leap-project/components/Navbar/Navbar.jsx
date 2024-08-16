 import {useState} from 'react';
 import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home')
  const handleToggle = () =>{
    setIsOpen(!isOpen)
  }

  const navLinks = (
    <ul className=' font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
    <li>
      <a href="#home"
      className={`text-white ${activeSection==='home' ? 'isActive' : ''}`}> Home</a>
    </li>
    <li>
      <a href="#services"
      className={`text-white ${activeSection==='services' ? 'isActive' : ''}`}>Services</a>
    </li>
    <li>
      <a href="#about"
      className={`text-white ${activeSection==='about' ? 'isActive' : ''}`}>About us</a>
    </li>
    <li>
      <a href="#pricing"
      className={`text-white ${activeSection==='pricing' ? 'isActive' : ''}`}>Pricing</a>
    </li>
    <li>
      <a href="#testimonial"
      className={`text-white ${activeSection==='testimonial' ? 'isActive' : ''}`}>Testimonial</a>
    </li>
    </ul>
  )

    return (
      <header className=" bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center h-full ">
        {/* logo */}
        <div> 
          <a>
            <img src="../" alt="logo"/>
          </a>
        </div>
        {/* navitems */}
        <div className='hidden md:flex flex-grow justify-center '>
          <nav>
            {navLinks}
          </nav>
        </div>
        {/* button */}
        <div className=' hidden md:block'><a href='#contact' className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>Contact us</a></div>
        {/* hamburger menu */}
        <div className=' block md:hidden'>
          <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? ' border border-white  ' : ' '}`}>
          <HiMenuAlt3 className='size-6' />
          </button>
        </div>
      </div>
      {
        isOpen && (
          <nav>
            <ul>{navLinks.props.children}</ul>
          </nav>
        )
      }
      </header>
    )
  }
  
  export default Navbar
  