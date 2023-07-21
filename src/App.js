export default () => {
    const App = document.createElement('div')
    let nav = document.createElement('ul')
    App.classList.add('container')
    nav.appendChild(builddNavItens('Sacola'))
    nav.appendChild(builddNavItens('Pagamento'))
    nav.appendChild(builddNavItens('Confirmação'))
    App.appendChild(nav)
    return App
    }


    const builddNavItens = (item) => {
    const li = document.createElement('li')
    li.innerHTML = item
    return li
    }




