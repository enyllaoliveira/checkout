import cart from './views/cart/cart.js'
import payment from './views/payment/payment.js'

export default () => {
    getProducts().then(res => localStorage.setItem('infoCart', JSON.stringify(res)))
    const infoCart = JSON.parse(localStorage.getItem('infoCart'))
    const App = document.createElement('div')
    let nav = document.createElement('ul')

    nav.classList.add('navbar')
    nav.appendChild(builddNavItens('Sacola', 'cart'))
    nav.appendChild(builddNavItens('Pagamento', 'payment'))
    nav.appendChild(builddNavItens('Confirmação', 'confirmation'))
    App.appendChild(nav)
    App.setAttribute('class', 'container')
    
    window.addEventListener('DOMContentLoaded', () => {
        if (!window.location.hash) {
            App.append(cart(infoCart))
            history.pushState(null, null, '#cart')
        } else {
            App.append(buildRoutes(infoCart))        
        }
        setRouteActive()
    })

    return App
    }

    const setRouteActive = () => {
        let list = document.querySelectorAll('a')
        list.forEach(element => {
            element.classList.add('inactive')
            if (window.location.hash.replace('#', '') === element.classList[0]) {
                element.classList.remove('inactive')
                element.classList.add('is-active')
            }
                });
    }

    const buildRoutes = (infoCart) => {
        if (window.location.hash === '#cart' ) {
            return cart(infoCart)
        }

        if (window.location.hash === '#payment' ) {
            return payment()
        }

        if (window.location.hash === '#confirmation' ) {
            return confirmation()
        }
    } 

    const builddNavItens = (text, identifier) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    
    link.innerText = text
    link.classList.add(identifier)
    link.setAttribute('href', `#${identifier}`)
    li.appendChild(link)
    return li
    }

    const getProducts = async() => {
        const payload = {method: 'GET'}
        const response = fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07', payload)
        const data = await (await response).json()
        return data
    }

