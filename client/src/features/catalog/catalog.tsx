import { Products } from "../../app/models/products";
import ProductList from "./product-list";
import { useState, useEffect } from "react";

interface Props{
    Products:Products[],
    addProduct: () => void;
}
export default function Catalog(){
   
    const [Products,setProducts] = useState<Products[]>([])
  
  useEffect(()=>{
    fetch('http://localhost:5124/api/products')
      .then(response=> response.json())
      .then(data=> setProducts(data))
  },[])
  
    return (
            <>
                <ProductList Products={Products}/>
            </>
    );
}