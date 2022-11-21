import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ item }) {
  return (
    <Card sx={{ width: "20%", margin: "3%" }}>
      <CardMedia component="img" image={item.picture} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "green" }}>
          $ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <IconButton>
          <AddShoppingCartIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
