import cart from "../cart/cart.js"
import details from "../../components/details/details.js"

export default (paymentItems) => {
    const confirmation = document.createElement('div')
    confirmation.appendChild(cart(paymentItems))
    // confirmation.appendChild(details(paymentItems))
    window.addEventListener('load', () => {
    })

    let btn = document.createElement('a')
    btn.classList.add('btn-next')
    btn.innerText = `Voltar ao início do protótipo`
    // btn.setAttribute('href', '#cart')
    // window.location.href = '#cart'

    confirmation.appendChild(btn)

    return confirmation
}

