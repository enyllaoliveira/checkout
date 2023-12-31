
export default (data) => {
    const cardItemsPayment = document.createElement('div')
    cardItemsPayment.classList.add('details')

    let cardWithItems = mountItensPrice(data)
    cardItemsPayment.appendChild(cardWithItems)
        
      return cardItemsPayment

     function mountItensPrice(data) {
        let cardPayment = document.createElement('div')
        cardPayment.classList.add('card-payment-items')
    
        let totalpriceItems = document.createElement('span')
        totalpriceItems.classList.add('card-payment')

        let totalPriceText = document.createElement('span')
        totalPriceText.innerText = `Produtos: (3 itens)`

        let totalPrice = document.createElement('span')
        totalPrice.innerText = `R$ ${data.subTotal}` 
    
        let freightTextItems = document.createElement('span')
        freightTextItems.classList.add('card-payment')

        let freightText =  document.createElement('span')
        freightText.innerText = `Frete: `

        let freight = document.createElement('span')
        freight.innerText = `R$ ${data.shippingTotal}` 

        let discountItemItems = document.createElement('span')
        discountItemItems.classList.add('card-payment')

        let discountItemText = document.createElement('span')
        discountItemText.innerText = `Desconto: `

        let discountItem = document.createElement('span')
        discountItem.innerText = `R$ ${data.discount}` 
    
        let totalFinalItem = document.createElement('span')
        totalFinalItem.classList.add('card-payment')

        let totalFinalText = document.createElement('span')
        totalFinalText.innerText =  `Subtotal: `

        let totalFinal = document.createElement('span')
        totalFinal.innerText = `R$ ${data.total}` 


        totalFinalItem.appendChild(totalFinalText)
        totalFinalItem.appendChild(totalFinal)
        discountItemItems.appendChild(discountItemText)
        discountItemItems.appendChild(discountItem)
        freightTextItems.appendChild(freightText)
        freightTextItems.appendChild(freight)
        totalpriceItems.appendChild(totalPriceText)
        totalpriceItems.appendChild(totalPrice)
        totalpriceItems.appendChild(totalPrice)

        cardPayment.appendChild(totalpriceItems)
        cardPayment.appendChild(freightTextItems)
        cardPayment.appendChild(discountItemItems)
        cardPayment.appendChild(totalFinalItem)
       
        return cardPayment
    }  
    
}





