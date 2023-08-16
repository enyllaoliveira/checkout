import products from "../../components/products/products.js"
import details from "../../components/details/details.js"

export default (data) => {
    const cart = document.createElement('div')
    cart.classList.add('list-itens' , 'wrapper')
    
    cart.appendChild(products(data.items))
    cart.appendChild(details(data))
    return cart
}


 



