import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const paymentMethods = ["Cash on Delivery", "Bank Transfer", "Easypaisa", "JazzCash"];

export default function PaymentMethod() {
  const [selectedPay, setSelectedPay] = useState();

  const handleSelectedPay = event => {
    setSelectedPay(event.target.value);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>Payment Methods</Typography>
      <Card>
        <CardContent>
          <FormControl>
            <RadioGroup value={selectedPay} onChange={handleSelectedPay}>
              {
                paymentMethods.map(paymentMethod => (
                  <FormControlLabel
                    value={paymentMethod}
                    control={<Radio />}
                    label={paymentMethod}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}
