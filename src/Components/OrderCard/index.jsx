/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid'
const OrderCard = props=>{
        // const context = useContext(GlobalContext);
        const { title, imgURL, price, deleteOrderItem} = props

    return(
        <div className="flex justify-between items-center w-full mt-4 pt-2 border-t border-white/40">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg' src={imgURL} alt={title} />
                </figure>
                <p className='text-xs font-lightm w-36'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='pl-2 text-normal font-medium'>${price}</p>

                {
                    deleteOrderItem &&  
                    <XMarkIcon 
                        onClick={ ()=> deleteOrderItem(props.title)}
                        className="size-3 text-black cursor-pointer">   
                    </XMarkIcon>
                }
               
            </div>
        </div>
    )
}

export {OrderCard}