import {useRoutes, BrowserRouter} from "react-router-dom"
import {Home} from "../Home"
import {MyAcount} from "../MyAcount"
import {MyOrder} from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { NotFound } from "../NotFound"
import './App.css'
import {Navbar} from '../../Components/Navbar'
import {GlobalContextProvider, } from "../../Context"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"

const AppRoutes = ()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/clothes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/jewelery', element: <Home/>},
    { path: '/my-account', element: <MyAcount/>},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder/>},
    { path: '/my-orders/:id', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
   
    

  ])
  return routes;
}

function App() {

  return (

    <GlobalContextProvider>
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      <CheckoutSideMenu/>
      </BrowserRouter>
    </GlobalContextProvider>

   
  )
}

export default App
