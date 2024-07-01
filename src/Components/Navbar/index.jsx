import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../Context'
const Navbar =()=>{
   
    const context = useContext(GlobalContext)

    const activeStyle = "underline underline-offset-4"
    
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal text-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'
                    onClick={() => {context.setSearchCategory("");}}>
                    <NavLink 
                     to='/'
                     >
                        Shopi
                    </NavLink>
                </li>
                <li onClick={() => {context.setSearchCategory("");  }}>
                    <NavLink 
                    to='/'
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li  onClick={() => context.setSearchCategory("clothing")}>
                    <NavLink
                     to='/clothes'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li onClick={() => context.setSearchCategory("electronics")}>
                    <NavLink
                     to='/electronics'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li onClick={()=> context.setSearchCategory("jewelery")}>
                    <NavLink
                     to='/jewelery'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/toys'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/others'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul  className='flex items-center gap-3'>
                <li className='text-white/60'>
                    {context.user}
                </li>
                <li>
                    <NavLink
                     to='/my-orders'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     to='/my-account'
                     className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
             
                <li className='flex'>
                 <ShoppingBagIcon 
                 onClick={()=> context.setIsOrderOpen(!context.isOrderOpen)}
                 className="size-6 text-white"></ShoppingBagIcon>
                 <div className='pl-2'> {context.count}</div>
                </li>
                
            </ul>
        </nav>
    ) 
}

export {Navbar}