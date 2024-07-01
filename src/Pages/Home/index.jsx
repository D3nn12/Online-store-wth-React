import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { GlobalContext } from "../../Context"
function Home() {
    const context = useContext(GlobalContext)
    let currentPath = window.location.pathname.substring(1);

    //  console.log(currentPath)
    const rendeerView = () =>{
      if(context.searchByTitle?.length >0 && currentPath.length === 0) {
        if(context.filteredItems?.length > 0){
          return(
             context.filteredItems ?.map((item)=> (
            <Card
              key = {item.id}
              id = {item.id}
              img = {item.image}
              title = {item.title}
              price = {item.price}
              rating = {item.rating}
              category = {item.category}
              description = {item.description}
            />
         )) 
        )
        }else{
          return <div className=" text-white w-80 text-center ml-28">There are not results for your Search</div>
        }
        
      } 
      else if(context.searchByCategory === "electronics" || context.searchByCategory === "clothing" || context.searchByCategory === "jewelery"){
      
        return(
          context.foundItemsbyCatecory?.map((item)=> (
            <Card
              key = {item.id}
              id = {item.id}
              img = {item.image}
              title = {item.title}
              price = {item.price}
              rating = {item.rating}
              category = {item.category}
              description = {item.description}
            />
         )) 
        )
      }
       else{
        
       return context.items?.map((item)=> (
          <Card
            key = {item.id}
            id = {item.id}
            img = {item.image}
            title = {item.title}
            price = {item.price}
            rating = {item.rating}
            category = {item.category}
            description = {item.description}
          />
       )) 
      }
    }
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl text-white">Exclusive Products</h1>
        </div>
          <input 
            value={context.searchByTitle}
            type="text"
            placeholder="Search products"
            className="rounded-lg border-black border w-80 text-center p-4 mb-6 focus:outline-none " 
            onChange={(event)=> context.setSearch(event.target.value)}
            />
            
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          { rendeerView() }
        </div>
        {context.activeness && <ProductDetail/> }
        

      </Layout>
    )
  }
  
  export {Home}


 