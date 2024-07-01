/**
 * This function calculates total price of a new order
 * @param {Array} products shoppingCart: Array of objects
 * @returns{number} Total price
 */

export const totalPrice =(products) =>{
   return products.reduce((sum, item) => sum + item.price,0)
}