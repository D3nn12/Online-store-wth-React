
  // Shopping Cart Add products to my Orders
  const useLocalStorage = (userName, inicialOrders)=>{

     let parseItems;
     let localUserName = localStorage.getItem(userName);

            if(!localUserName){
                localStorage.setItem(userName, JSON.stringify(inicialOrders))

            }else{
                parseItems = JSON.parse(localUserName)

        }

    const ordenes = (item)=>{
        parseItems.push(item)
        localStorage.setItem(userName, JSON.stringify(parseItems))
        }
    return{
        ordenes,
        parseItems,
    }
  }

  export{useLocalStorage}
 