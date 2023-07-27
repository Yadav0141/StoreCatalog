import { Grid } from "@mui/material";
import { Products } from "../../app/models/products";
import ProductCard from "./product-card";

interface Props{
    Products:Products[];
}
export default function ProductList({Products}:Props){
 return (
 
 <Grid container spacing={4}>
    {Products.map((product) => (
    <Grid item xs={3} key={product.id}>
        <ProductCard  product={product} />
    </Grid>
     

    ))}
</Grid>

)
}