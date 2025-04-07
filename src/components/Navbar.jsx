import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import avatarImg from "../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../context/Authcontext';

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/orders' },
    { name: 'Cart', href: '/cart' },
    { name: 'Check Out', href: '/checkout' },
]
const Navbar = () => {
    // const currentUser = false;
    const {currentUser, logout} = useAuth();
    const handleLogOut = () => {
        logout()
    }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    console.log(isDropdownOpen)
    const cartItems = useSelector(state => state.cart.cartItem); //updating cart items means number 1 2 3

    console.log(cartItems)
    return (
        <header className='max-w-screen px-4 py-6 mx-auto'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center md:gap-16 gap-4'>
                    {/* left side */}
                    <Link to={"/"}><HiBars3CenterLeft className='size-6' /></Link>
                    <div className='relative space-x-2 w-40 sm:w-72'>
                        <IoSearchOutline className='absolute inline-block inset-y-2 left-3' />
                        <input type="text" placeholder='search here' className='focus:outline-none rounded-md px-6 py-1 md:px-8 w-full bg-[#EAEAEA]' />
                    </div>
                </div>
                <div className='relative flex items-center space-x-2 md:space-x-3'>
                    {/* right side */}
                    <div>
                        {
                            currentUser ? <><button onClick={() => { setIsDropdownOpen(!isDropdownOpen) }}>
                                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''} `} />
                            </button>
                                {/* show dropdown */}
                                {
                                    isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-10">
                                            <ul>
                                                {
                                                    navigation.map((item) => {
                                                        return (
                                                            <li key={item.name} onClick={()=>{setIsDropdownOpen(false)}}>
                                                                <Link to={item.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{item.name}</Link>
                                                            </li>
                                                        );
                                                    })
                                                }
                                                <li>
                                                    <button className="block px-4 w-full text-left py-2 text-gray-700 hover:bg-gray-100" onClick={handleLogOut}>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </> : <Link to={'/login'}><FaRegUserCircle className='size-6' /></Link>
                        }
                    </div>
                    <button className='hidden sm:block'>
                        <CiHeart className='size-6' />
                    </button>
                    <Link className='bg-amber-400 py-1 items-center flex sm:px-6 px-2 rounded-sm space-x-2' to={'/cart'}>
                        <IoCartOutline />
                        {
                            cartItems.length > 0 ?  <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> : <span className='text-sm font-semibold sm:ml-1'>0</span>

                        }
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
