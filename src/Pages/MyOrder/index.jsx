import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import {  ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(GlobalContext)
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
 
  if(index === "last") index = context.lala.length -1
  
    return (
      
        <Layout>
          <div className="flex justify-center items-center w-80 relative ">
            <h1 className='text-white font-bold mb-4'> My Order</h1>
            
            <Link to='/my-orders' className="absolute left-0">
               <ChevronLeftIcon className="size-6 text-white cursor-pointer"></ChevronLeftIcon>
            </Link>
          </div>
         
          <div className='p-4 mt-6 bg-blue-900/40 rounded-lg text-white'>
          {
        context.lala && context.lala.length > 0 ? context.lala[index].products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title ={product.title}
                    imgURL = {product.img}
                    price= {product.price}
                    />
                    
              ))
              : <p>No hay productos en la orden.</p>
            }
      </div>
        </Layout>
        
      
    
    )
  }
  
  export {MyOrder} 