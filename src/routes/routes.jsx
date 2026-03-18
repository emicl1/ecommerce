import ShoppingCart from "../pages/ShoppingCart.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import App from "../App.jsx";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Shop",
        element: <Shop />,
    },
    {
        path: "/ShoppingCart",
        element: <ShoppingCart />,
    }
];

export default routes