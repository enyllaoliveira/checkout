import details from "../../components/details/details.js"

export default (paymentItems) => {
    const payment = document.createElement('div') 

    let form = mountCartPayment()
    payment.appendChild(form)
    payment.appendChild(details(paymentItems)) 
    window.addEventListener('load', () => {
    })

    let btn = document.createElement('a')
    btn.classList.add('btn-next', 'disabled')
    btn.style.pointerEvents = 'none'
    btn.innerText = `Finalizar pedido`  
    btn.addEventListener('click', () => {
        if (document.getElementsByTagName('input').length !== 4) {
            btn.classList.add('btn-next', 'disabled')
            btn.style.pointerEvents = 'none'
        } else {
            btn.classList.remove('disabled')
            btn.removeAttribute.style
            btn.setAttribute('href', '#confirmation')
            window.location.href = '#confirmation'
            window.location.reload() 
        }
    }) 
    validate(form, btn)
    payment.appendChild(btn)

    return payment 
}

    function mountCartPayment() {
        const form = document.createElement('form')
        form.innerHTML = `<h2> Cartão de crédito </h2>`

        const informationsNumber = document.createElement('div')
        informationsNumber.classList.add('informations-name-number')
 
        const informationNumberName = document.createElement('label')
        informationNumberName.innerHTML = `Número`

        const informationNumber = document.createElement('input')
        informationNumber.id = 'numberCart'
        informationNumber.classList.add('informations')
        informationNumber.type = 'text'
        informationNumber.autocomplete = 'off'
        informationNumber.maxLength = '19'
        informationNumber.addEventListener('keypress', () => {
            let inputLength = informationNumber.value.length 

            if (inputLength === 4 || inputLength === 9 || inputLength === 14  ) {
                informationNumber.value += ' '
            }
        })

        const informationsName = document.createElement('div')
        informationsName.classList.add('informations-name-number')

        const informationNameName = document.createElement('label')
        informationNameName.innerHTML = `Nome do titular do cartão`

        const informationName = document.createElement('input')
        informationName.classList.add('informations')
        informationName.id = 'nameHolder'
        informationName.type = 'text'

        informationsName.appendChild(informationNameName)
        informationsName.appendChild(informationName)
        informationsNumber.appendChild(informationNumberName)
        informationsNumber.appendChild(informationNumber)
      
        const containerData = document.createElement('div')
        containerData.classList.add('container-data')

        const informationsDate = document.createElement('div')

        const informationDateName = document.createElement('label')
        informationDateName.innerHTML = `Data de validade`

        const informationDate = document.createElement('input')
        informationDate.id = 'dateCart'
        informationDate.classList.add('informations-cart')
        informationDate.type = 'text'
        informationDate.maxLength = '7'
        informationDate.addEventListener ('keypress', () => {
           let lengthDateValidate = informationDate.value.length

           if (lengthDateValidate === 2) {
            informationDate.value += '/'
           }
        })

        const informationsCode = document.createElement('div')

        const informationCodeName = document.createElement('label')
        informationCodeName.innerHTML = `Código CVV`

        const informationCode = document.createElement('input')
        informationCode.id = 'codeCart'
        informationCode.classList.add('informations-cart')
        informationCode.type = 'text'
        informationCode.maxLength = '3'

        informationsDate.appendChild(informationDateName)
        informationsDate.appendChild(informationDate)
        containerData.appendChild(informationsCode)
        containerData.appendChild(informationsDate)
        informationsCode.appendChild(informationCodeName)
        informationsCode.appendChild(informationCode)
  
        form.appendChild(informationsNumber)     
        form.appendChild(informationsName)    
        form.appendChild(containerData)    

        return form
    }

function validate(form, btn) {

    form.addEventListener('input', function(event)  {
        let elementsErrors = []
        for(let el of form.elements) {
            validateFields()[el.id](el)
            if (!validateFields()[el.id](el)) {
                elementsErrors.push(el)
            }
        }
        if (elementsErrors.length > 1) {
            btn.classList.add('disabled')
            btn.style.pointerEvents = 'none'
        } else {
            btn.classList.remove('disabled')
            btn.removeAttribute('style')
        }
    })

 }

 let validateFields = () => {
    return {
        'numberCart': (el) => {
            if (el.value.length < 19) {
                setErrors(el)
            }   else {
                cleanErrors(el)
            }
            return el.value.length === 19
        },
        'nameHolder': (el) => {
            if (el.value.length <= 8) {
                setErrors(el)
            } else {
                cleanErrors(el)
            }
            return el.value.length <= 8 
        },
        'dateCart': (el) => {
            if (el.value.length < 7) {
                setErrors(el)
            } else {
                cleanErrors(el)
            }
            return el.value.length === 7
        },
        'codeCart': (el) => {
            if (el.value.length < 3) {
                setErrors(el)
            } else {
                cleanErrors(el)
            }
            return el.value.length === 3
        }
    }
}

let cleanErrors = (el) => {
    el.classList.remove('has-error')
    let msgError = document.getElementById('msg-error')
    if (msgError) {
        msgError.parentElement.removeChild(msgError)
    }
}

let setErrors = (el) => {
    if (!el.classList.contains('has-error')) {
        el.classList.add('has-error')
        let msgError = document.createElement('span')
        msgError.id = 'msg-error'
        msgError.innerText= `Esse campo é obrigatório.`
        el.after(msgError)
    } 
    return
}