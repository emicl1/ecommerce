import {useEffect, useState} from "react";
import style from "../style/Shopitems.module.css"
import {fetchShopItems} from "../fetcher/shopItems.jsx";
import { addToCart, removeFromCart} from "../fetcher/cart.jsx";

let arrIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function ShopItems() {
    return (
        <div className={style.items}>
            {arrIdx.map((idx) => {
                return (<Item id={idx} key={idx}></Item>)
            })}
        </div>
    )
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


function Item(id) {

    const {response, error, loading} = useGetItem(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={style.item}>
            <h3>{response.title}</h3>
            <img src={response.image} alt={"placeholder text"}/>
            <p>{response.price}$</p>
            <AddButton id={id}></AddButton>
        </div>
    );
}

function AddButton({id}) {
    const [amount, setAmount] = useState(0)

    if (amount === 0) {
        return (
            <button onClick={()=>{addToCart(id);setAmount(amount + 1)}}>add to cart</button>
        )
    }
    return (
        <div>
            <button onClick={()=>{addToCart(id); setAmount(amount+1)}}>+</button>
            {amount}
            <button onClick={() => {removeFromCart(id); setAmount(amount-1)}}>-</button>
        </div>
    )
}


export default ShopItems