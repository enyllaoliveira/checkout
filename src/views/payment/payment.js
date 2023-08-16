export default (paymentItems) => {
    const payment = document.createElement('div') 

    let containerWithItems = mountCartPayment(paymentItems)
    payment.appendChild(containerWithItems)

    return payment 

    function mountCartPayment(paymentItems) {
        const container = document.createElement('div')
        container.innerHTML = `<h2> Cartão de crédito </h2>`
        container.classList.add('container')

        const informationsNumber = document.createElement('div')

        const informationNumberName = document.createElement('h3')
        informationNumberName.innerHTML = `Número`
        const informationNumber = document.createElement('input')
        informationNumber.classList.add('informations')
        informationNumber.type = 'text'

        const informationsName = document.createElement('div')

        const informationNameName = document.createElement('h3')
        informationNameName.innerHTML = `Nome do titular do cartão`

        const informationName = document.createElement('input')
        informationName.classList.add('informations')

        informationName.type = 'text'

        const containerData = document.createElement('div')
        containerData.classList.add('containerData')

        const informationsDate = document.createElement('div')
        
        const informationDateName = document.createElement('h3')
        informationDateName.innerHTML = `Data de validade`

        const informationDate = document.createElement('input')
        informationDate.classList.add('informationsCart')
        informationDate.type = 'text'

        const informationsCode = document.createElement('div')

        const informationCodeName = document.createElement('h3')
        informationCodeName.innerHTML = `Código CVV`

        const informationCode = document.createElement('input')
        informationCode.classList.add('informationsCart')
        informationCode.type = 'text'

  
        informationsNumber.appendChild(informationNumberName)
        informationsNumber.appendChild(informationNumber)
        informationsName.appendChild(informationNameName)
        informationsName.appendChild(informationName)
        informationsDate.appendChild(informationDateName)
        informationsDate.appendChild(informationDate)
        informationsCode.appendChild(informationCodeName)
        informationsCode.appendChild(informationCode)
        containerData.appendChild(informationsCode)
        containerData.appendChild(informationsDate)

        container.appendChild(informationsNumber)     
        container.appendChild(informationsName)    
        container.appendChild(containerData)    

        return container
    }

}