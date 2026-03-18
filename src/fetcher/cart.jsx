let cart = [];

function numCart(){
    return cart.length
}

function getCart() {
    return cart;
}

function addToCart(productId) {
    cart = [...cart, {id: productId}];
}

function removeFromCart(productIdToRemove) {
    const index = cart.findIndex(p => p.id === productIdToRemove);
    if (index === -1) return;
    cart = [...cart.slice(0, index), ...cart.slice(index + 1)];
}



export {removeFromCart, addToCart, getCart, numCart}









