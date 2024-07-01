/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{



// const [currentUser, setCurrentUser] = useState("defoult")
// {lala} = an array that we obtained from the local storage, which contains all the items that were bought. 
// {compras} = a function that updates {lala} whenever somebody buys a new item
 const {
        ordenes: compras,
        parseItems: lala
      
    } = useLocalStorage("defoult", [])



  const  [count, setCount] = useState(0)
  const [activeness, setActiveness] = useState(false)
// Checkout side Menu Open/Close
  const [isOrderOpen, setIsOrderOpen] = useState(false)


  // Shopping Cart Add products to cart

  const [shoppingCart, setShoppingCart] = useState([])
 
  // Shopping Cart Add products to my Orders

  const [order, setOrder]  = useState([]);

  // Get products
  const [items, setItems] = useState(null)
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then (response => response.json()) 
      .then(text => setItems(text))
},[]);

const [filteredItems, setFilteredItems] = useState(null)
const [searchByTitle, setSearch] = useState("")


const filteredItemsByTitle = (items, searchByTitle) =>{
  console.log(searchByTitle)
  return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
}

useEffect(()=>{
  if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle)) 

},[items, searchByTitle])




const [searchByCategory, setSearchCategory] = useState("")
const [foundItemsbyCatecory, setFoundItemsbyCatecory] = useState(null)

const filteredItemsByCategory = (items, searchByCategory, searchByTitle) =>{
  if(searchByTitle){
   const categoryItems =  items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    return  categoryItems.title.toLowerCase().includes(searchByTitle.toLowerCase())
    
  }
  return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
}

useEffect(()=>{
  if(searchByCategory.length > 0) setFoundItemsbyCatecory(filteredItemsByCategory(items, searchByCategory, searchByTitle))
},[items, searchByCategory, searchByTitle])


// Product Detail + Show product

   const [productToShow, setProductToShow] = useState({})


// Valides if the user singed in 
   const [singIn, setSingIn] = useState(false)
   // Camputers the userName 
   const [user, setUser] = useState(null)
  // Camptures the two passwords that the users enters, then we use these two password to sing in the user
   const [password, setPassword] = useState("")
   const [password2, setPassword2] = useState("")


   return(<GlobalContext.Provider value={{
        count,
        setCount,
        activeness,
        setActiveness,
        productToShow, 
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        isOrderOpen,
        setIsOrderOpen,
        order, 
        setOrder,
        items,
        setItems,
        filteredItems,
        searchByTitle,
        setSearch,
        foundItemsbyCatecory, 
        setSearchCategory,
        searchByCategory,
        compras,
        lala,
        singIn, 
        setSingIn,
        user,
       setUser,
       password, 
       setPassword,
       password2, 
       setPassword2
      
 
   }}>
        
            {children}
        
          </GlobalContext.Provider>
   )
}