export default (products) => {
    const cart = document.createElement('div')
    cart.classList.add('list-itens')

    cart.innerHTML = '<h1> bag </h1>'
    for(let i = 0; i < products.length; i++) {
        cart.appendChild(mountItens(products[i].product))
    }

    return cart
}

function mountItens(product) {
    

    let card = document.createElement('div')
    card.classList.add('card')

    let img = document.createElement('img')
    img.src = product.imageObjects[0].medium
    img.classList.add('image')

    let text = document.createElement('span')
    text.innerText = product.name
    text.classList.add('tittle')

    let pricies = document.createElement('span')
    
    let oldPrice = document.createElement('span')
    oldPrice.classList.add('oldPrice')

    let price = document.createElement('span')
    price.innerText =  `R$${product.priceSpecification.originalPrice}` ;
    price.classList.add('price')

    if (product.priceSpecification.maxPrice !== product.priceSpecification.originalPrice) {
        oldPrice.innerText = `R$${product.priceSpecification.maxPrice}`
    } 
    else {
        oldPrice.innerText = '';
    }

    pricies.appendChild(oldPrice)
    pricies.appendChild(price)
    card.appendChild(img)
    card.appendChild(text)
    card.appendChild(pricies)
    
    return card
    } 

 



