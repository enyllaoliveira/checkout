import products from "../../components/products/products.js"
import details from "../../components/details/details.js"

export default (data) => {
    const cart = document.createElement('div')
    cart.classList.add('wrapper')
    
    cart.appendChild(products(data.items))
    cart.appendChild(details(data))
    
    let btn = document.createElement('a')
    btn.classList.add('btn-next')
    btn.innerText = `Seguir para o pagamento`  
    btn.addEventListener('click', () => {
        btn.setAttribute('href', '#payment')
        window.location.href = '#payment'
        window.location.reload() 
    }) 
    cart.appendChild(btn)

    return cart
}


 



