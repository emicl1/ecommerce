

function fetchShopItems(id){
    return fetch('https://fakestoreapi.com/products/'+id)
        .then(response => {
            if (response.status >= 400){
                throw new Error("server error")
            }
            return response.json()
        })
}



export {fetchShopItems}