import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { GlobalContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
const CheckoutSideMenu = ()=>{
    const context = useContext(GlobalContext)

    const currentDate = new Date().toDateString().substring(4);
   
    const handleCheackout = ()=>{
        const orderToAdd = {
            date: currentDate,
            products: context.shoppingCart,
            totalProducts: context.shoppingCart.length,
            totalPrice: totalPrice(context.shoppingCart),
        }

        context.setOrder([...context.order, orderToAdd])
        context.setShoppingCart([]);
        context.setCount(0)
        context.compras(orderToAdd)

    }

    // console.log(context.order)
   

    const deleteOrderItem = (title)=>{
        // Se pudo haber hecho de esta manera tambie
        // const filteredProducts = shoppingCart.filter(produc => product.title != title) //
    
        // El codigo de arriba, lo que hace es filtra los productos por el titulo. Y retorna todo aquel producto que no coinsida con el titulo enviado en el parametro.
        const newOrder = [...context.shoppingCart]
        const foundOrder = newOrder.findIndex(order => order.title === title)
        newOrder.splice(foundOrder, 1)
        context.setShoppingCart(newOrder)
        context.setCount(context.count - 1)
       }
    
    return(
        <aside className={`${context.isOrderOpen ? 'flex' : 'hidden'} scrollable-cards checkout-side-menu flex-col fixed right-2 top-16 border border-black rounded-lg bg-white p-4`}>
           <div className="flex justify-between items-center">
                <h2 className="font-medium text-base">My Order</h2>
                <div onClick={()=> {
                    context.setIsOrderOpen()
                    }}>
                        
                        <XMarkIcon className="size-9 text-black cursor-pointer"></XMarkIcon>
                    
                    
                    </div>
           </div>
        <div className='flex-1 w-full'>
            
              {
              context.shoppingCart.map((item)=>(
                <OrderCard
                    key={item.price}
                    title = {item.title}
                    imgURL = {item.img}
                    price = {item.price}
                    deleteOrderItem  = {deleteOrderItem}
                />
              ))
              }
        </div>

          <div className='px-6'>
              <p className='flex justify-between items-center mb-3 '>
                   
                <span className='text-green-600 font-medium'>Total:</span>
                <span className='font-bold text-xl'>${totalPrice(context.shoppingCart)}</span>
              
              </p>
                <Link  to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg ' 
                        onClick={() => {
                            console.log(context.shoppingCart.length)
                           { context.shoppingCart.length > 0 && handleCheackout()}
                            context.setIsOrderOpen()
                            context.setSearch("")
                            // context.setSingIn(false)

                            }}
                        >
                        Checkout
                    </button>
                </Link>
          </div>
        </aside>
    )
   
}
 export{CheckoutSideMenu}