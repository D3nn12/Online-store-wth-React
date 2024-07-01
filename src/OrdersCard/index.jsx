/* eslint-disable react/prop-types */
import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import {CurrencyDollarIcon} from '@heroicons/react/24/solid'
import {CalendarDaysIcon} from '@heroicons/react/24/solid'
import {  ChevronRightIcon } from '@heroicons/react/24/solid'



const OrdersCard = props =>{
    const {totalPrice, totalProducts, date} = props
    return(

        <div className='w-80 flex items-center justify-between'>
            <div className="flex justify-between items-center mb-3 w-full border-b border-t border-white/40 pb-2 pt-2 gap-4">
                    <span className='flex items-center gap-1 text-white text-xs'><ShoppingCartIcon className="size-6 text-white cursor-pointer"></ShoppingCartIcon>{totalProducts}{totalProducts === 1 && <span>item</span>} {totalProducts >= 2 && <span>items</span>}</span>
                    <span className='flex items-center gap-1 text-white  text-xs'><CurrencyDollarIcon className="size-6 text-white cursor-pointer"></CurrencyDollarIcon>{totalPrice}</span>
                    <span className='flex items-center gap-1 text-white text-xs '><CalendarDaysIcon  className="size-6 text-white cursor-pointer"></CalendarDaysIcon>{date}</span>
                    <span><ChevronRightIcon className="size-4 text-white cursor-pointer"></ChevronRightIcon></span>
            
            </div>

        </div>    )
}

export{OrdersCard}