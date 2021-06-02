import { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";

import { CartContext } from "../../helpers/CartProvider";
import "./CustomPaging.css";

const myImages = [
  "/images/banner.jpg",
  "/images/banner1.jpg",
  "/images/banner2.jpg",
];

const useStyles = makeStyles({
  styleButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export function ProductDetail(props) {
  const { product } = props;
  const classes = useStyles();
  const { addToCart, unitsInCart } = useContext(CartContext);
  const [selectedDrink, setSelectedDrink] = useState("");
  const [quantity, setQuantity] = useState(1);

  let handleDrink = event => {
    setSelectedDrink(event.target.value);
  };

  const handleAddToCart = () => {
      addToCart(product, quantity, selectedDrink);
      setQuantity(1);
  }

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <ProductCarousel />
          </Grid>
          <Grid item lg={6}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>Select Drink</h3>
            <FormControl error={!selectedDrink}>
              <InputLabel id="label">Drinks</InputLabel>
              <Select
                onChange={handleDrink}
                value={selectedDrink}
                labelId="label"
                style={{ width: "550px" }}
              >
                <MenuItem value="Coke">Coke</MenuItem>
                <MenuItem value="Sprite">Sprite</MenuItem>
                <MenuItem value="Fanta">Fanta</MenuItem>
                <MenuItem value="Water">Water</MenuItem>
              </Select>
              {!selectedDrink && (
                <FormHelperText>Please select your drink</FormHelperText>
              )}
            </FormControl>
            <h1>Rs. {product.price * quantity}</h1>
            <ButtonGroup size="large" variant="outlined" color="secondary">
              <Button
                onClick={() => setQuantity(quantity - 1)}
                size="small"
                variant="outlined"
                color="secondary"
                disabled={quantity === 1}
              >
                -
              </Button>
              <Button variant="outlined" color="secondary" size="small">
                {quantity}
              </Button>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                size="small"
                variant="outlined"
                color="secondary"
                disabled={quantity === 10}
              >
                +
              </Button>
            </ButtonGroup>
              <Button
                onClick={handleAddToCart}
                className={classes.styleButton}
                style={{ marginLeft: "180px" }}
                variant="contained"
                color="secondary"
                disabled={!selectedDrink}
              >
                Add to Cart
              </Button>
              {!!unitsInCart(product) && (
                <div>There are {unitsInCart(product)} units of this item in cart!</div>
              )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const ProductCarousel = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img style={{ width: "120px", height: "80px" }} src={myImages[i]} />
        </a>
      );
    },
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "styling-dots",
  };

  return (
    <Slider {...settings}>
      {myImages.map(image => (
        <div>
          <img
            style={{ height: "300px", width: "100%", marginTop: "30px" }}
            src={image}
            alt="image not found"
          />
        </div>
      ))}
    </Slider>
  );
};
