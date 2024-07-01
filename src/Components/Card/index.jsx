/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PlusIcon} from '@heroicons/react/24/solid'
import {CheckIcon} from '@heroicons/react/24/solid'
import { GlobalContext} from '../../Context';
import PropTypes from 'prop-types';



const Card = (product)=>{
    const context = useContext(GlobalContext)

    const showProduct = (details)=>{
        context.setActiveness(true)
        context.setIsOrderOpen(false)
        context.setProductToShow(details)
    }

    const addProductToCart = (item) =>{
    context.setShoppingCart([...context.shoppingCart, item])
    context.setCount(context.count + 1,)
    context.setIsOrderOpen(true)

   }   

    const renderIcon = (title)=>{
        const isInCart = context.shoppingCart.filter(product => product.title === title).length > 0
        
        if(isInCart){
            return (
                    <div 
                        className="absolute top-1 right-1 flex justify-center items-center bg-blue-500/70 w-8 h-8 rounded-full text-3xl text-white p-1 pb-2"
                        onClick={(e)=>{e.stopPropagation()}}>

                         <CheckIcon className="size-9 text-white"></CheckIcon>
                   </div>
             )}else{
                    return(
                    <div
                        className="absolute top-1 right-1 flex justify-center items-center bg-black/60 w-8 h-8 rounded-full text-3xl text-white p-1 pb-1"
                        onClick={(e)=> {
                            context.setActiveness(false)
                            addProductToCart(product)
                            e.stopPropagation()}}>

                            <PlusIcon className="size-9 text-white"></PlusIcon>
                    </div>)}
            }

    return(
        <div 
             className="bg-white/10 cursor-pointer w-50 h-60 rounded-lg"
             onClick={()=> showProduct(product)}> 

            <figure className="relative w-full h-5/6 mb-2">
                <span className="absolute bottom-3 left-3 bg-white/60 rounded-lg text-black text-xs text-center px-3 py-.5">{product.category}</span>
                <img className="rounded-lg w-full h-full object-cover" src={product.img} alt={product.title}></img>
               {renderIcon(product.title)}
            </figure>
            <p
                className="flex justify-between pl-2 pr-2">
                <span className="text-md font-semibold text-white/85">Rate {product.rating.rate}</span>
                <span className="font-bold text-white/85">${product.price}</span>
            </p>
        </div>
    )
}


Card.propTypes = {
    product: PropTypes.node, // Define the type for the 'children' prop
  };
export {Card}