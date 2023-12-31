import {  Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Products } from "../../app/models/products";
import { Link } from "react-router-dom";

interface Props{
    product: Products
}
export default function ProductCard({product}:Props){
return (
    <Card>
      <CardHeader 
      avatar={
        <Avatar sx={{bgcolor:'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}
        </Avatar>
      }
      title={product.name}
      titleTypographyProps={{
        sx : {fontWeight:'bold',color : 'primary.main'}
      }}
      />
      <CardMedia
        sx={{ height: 140,backgroundSize: 'contain' }}
        image={product.pictureUrl}
        title={product.name}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          ${ (product.price /100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
)
}