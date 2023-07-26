import cart from './views/cart/cart.js'

export default () => {
    const App = document.createElement('div')
    let nav = document.createElement('ul')
    nav.classList.add('navbar')
    nav.appendChild(builddNavItens('Sacola'))
    nav.appendChild(builddNavItens('Pagamento'))
    nav.appendChild(builddNavItens('Confirmação'))
    App.appendChild(nav)
    App.setAttribute('class', 'container')

    window.addEventListener('DOMContentLoaded', () => {
        if (!window.location.hash) {
            App.append(cart())
            history.pushState(null, null, '#cart')
        } else {
            App.append(buildRoutes())        
        }
    })
    return App
    }

    const buildRoutes = () => {
        if (window.location.hash === '#cart' ) {
            return cart()
        }

        if (window.location.hash === '#payment' ) {
            return payment()
        }

        if (window.location.hash === '#confirmation' ) {
            return confirmation()
        }
    } 

    const builddNavItens = (item) => {
    const li = document.createElement('li')
    li.innerHTML = item
    return li
    }

/* criar um elemento de 'a' e setar o href com o link da aba*/


