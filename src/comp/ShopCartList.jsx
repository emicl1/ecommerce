import {useEffect, useState} from "react";
import {getCart} from "../fetcher/cart.jsx";
import {fetchShopItems} from "../fetcher/shopItems.jsx";
import style from "../style/Shopitems.module.css";

function useGetShopCartList() {

    return getCart()
}

function useGetItem({id}) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchShopItems(id)
            .then((response) => setResponse(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [id]);

    return {response, error, loading};
}

function CartItem({id}) {
    const {response, error, loading} = useGetItem({id});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div>
            <h3>{response.title}</h3>
            <img src={response.image} alt={"placeholder text"}/>
            <p>{response.price}$</p>
        </div>
    )
}

function ShopCartList() {
    const cart = useGetShopCartList();

    console.log("cart contents:", JSON.stringify(cart));
    return (
        <div>
            {cart.map((product) => (
            <CartItem key={product.id.id} id={product.id.id}></CartItem>
            ))}
        </div>
    )
}



export default ShopCartList