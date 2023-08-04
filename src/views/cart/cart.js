export default (products) => {
    console.log(products)
    const cart = document.createElement('div')
    cart.innerHTML = '<h1> cart </h1>'

    return cart
}