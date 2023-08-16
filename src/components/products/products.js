
export default (items) => {
    const cardItens = document.createElement('div')
    cardItens.classList.add('list-itens' , 'wrapper')

    items.forEach(element => {
        let item = mountItem(element.product.imageObjects[0]?.medium, element.product.name, element.product.priceSpecification.originalPrice, element.product.priceSpecification.maxPrice)
        cardItens.appendChild(item)
    });

     return cardItens     
}

function mountItem(image, name, price, oldPricies) {
    
    let card = document.createElement('div')
    card.classList.add('card')

    let img = document.createElement('img')
    img.loading = 'lazy';
    img.src = image
    img.classList.add('image')

    let text = document.createElement('span')
    text.innerText = name
    text.classList.add('tittle')

    let pricies = document.createElement('span')
    
    let oldPrice = document.createElement('span')
    oldPrice.classList.add('oldPrice')

    let itemsPrice = document.createElement('span')
    itemsPrice.innerText =  `R$${price}` ;
    itemsPrice.classList.add('price')

    if (oldPricies != price) {
        oldPrice.innerText = `R$${oldPricies}`
    } 
    else {
        oldPrice.innerText = '';
    }

    pricies.appendChild(oldPrice)
    pricies.appendChild(itemsPrice)
    card.appendChild(img)
    card.appendChild(text)
    card.appendChild(pricies)
    
    return card
} 