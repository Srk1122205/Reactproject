import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";

export default function CheckoutForm() {
  const { cartItems, cartTotal, totalCartItems } = useContext(CartContext);

  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>Cart Summary</Typography>
        <Avatar> {totalCartItems} </Avatar>
      </Grid>
      <Card>
        <CardContent>
          {cartItems.map(item => (
            <Grid container justify="space-between">
              <Typography gutterBottom>
                {item.cartQuantity} x {item.title} [{item.drink}]
              </Typography>
              <Typography gutterBottom>
                Rs. {item.cartQuantity * item.price}
              </Typography>
            </Grid>
          ))}
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container justify="space-between">
            <Typography variant="button" gutterBottom>
              Grand Total
            </Typography>
            <Typography variant="button" gutterBottom>
              Rs. {cartTotal}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      </>
  );
}
