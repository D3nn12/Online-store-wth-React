import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from 'react'
import { GlobalContext } from '../../Context'

const ProductDetail = ()=>{
    const context = useContext(GlobalContext)
    
    return(
        <aside className="product-detail flex flex-col fixed right-0 top-16 border border-black rounded-lg bg-white p-6 mr-2">
           <div className="flex justify-between items-center">
                <h2 className="font-medium text-base">Detail</h2>
                <div onClick={()=> context.setActiveness(false)}><XMarkIcon className="size-6 text-black cursor-pointer"></XMarkIcon></div>
           </div>

           <figure className='w-full h-48 mt-2 px-2'>
                    <img 
                    src={context.productToShow.img} 
                    alt={context.productToShow.title} 
                    className='w-full h-full rounded-lg' />
           </figure>
           <span className='text-green-600 text-lg font-semibold mt-2'>${context.productToShow.price}</span>
           <h2 className='font-bold mt-2 text-sm'>{context.productToShow.title}</h2>
           <p className='text-xs font-normal mt-2'>{context.productToShow.description}</p>
           <div className='flex justify-between mt-2'>
                <span className='font-bold text-base'>Category</span>
                <span className='font-semibold text-base text-green-600'>{context.productToShow.category}</span>  
           </div>
        </aside>
    )
   
}
export {ProductDetail};

