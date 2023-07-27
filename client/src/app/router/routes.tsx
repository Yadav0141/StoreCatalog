import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/home";
import App from "../layouts/App";
import About from "../../features/about/about";
import Contact from "../../features/contact/contact";
import ProductDetail from "../../features/catalog/product-detail";
import Catalog from "../../features/catalog/catalog";

export const router= createBrowserRouter([
    {
        path:'/',
        element : <App />,
        children:[
            { path : '',element : <Home /> },
            { path : 'about',element : <About /> },
            { path : 'contact',element : <Contact /> },
            { path : 'catalog',element : <Catalog /> },
            { path : 'catalog/:id',element : <ProductDetail /> }
        ]

    }
])