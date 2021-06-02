import { Container, Grid, Button } from "@material-ui/core";
import CheckoutForm from "./checkout-form";
import CartSummary from "./cart-summary";
import PaymentMethod from "./payment-method";
export default function CheckoutPage() {
  return (
    <div>
  
      <Container>
        <Grid container>
          <Grid item lg={7}>
            <CheckoutForm />
          </Grid>
          <Grid item lg={5}>
            <CartSummary />
            <PaymentMethod />
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              style={{ marginTop: "20px" }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
