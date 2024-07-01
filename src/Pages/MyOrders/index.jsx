import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../OrdersCard"

 
function MyOrders() {
  const context = useContext(GlobalContext)

    return (

      <Layout>
        <h1 className='text-white font-bold mb-4'>Orders</h1>
        {context.lala?.map((item, index) =>{
          return <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice = {item.totalPrice}
                totalProducts = {item.totalProducts}
                date = {item.date}
              />
             </Link>
         
    })}
      </Layout>
    )
  }
  
  export {MyOrders}