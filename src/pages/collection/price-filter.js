import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { priceRange } from "../../data/products";

const useStyles = makeStyles({
    card: {
        marginTop: '10px'
    },
    slider:{
      marginTop: '40px'
    }
})

export default function PriceFilter(props) {
  let {selectedPriceRange, setSelectedPriceRange } = props;
  const classes = useStyles();

  const onChangePrice = newPriceRange => {
    if (
      newPriceRange[0] === priceRange.min &&
      newPriceRange[1] === priceRange.max
    )
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: false,
      });
    else
      setSelectedPriceRange({
        min: newPriceRange[0],
        max: newPriceRange[1],
        isApplied: true,
      });
  };


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="button" component="div">
          Price
        </Typography>
        <Slider 
          className={classes.slider}
          min={priceRange.min}
          max={priceRange.max}
          value={[selectedPriceRange.min || priceRange.min, selectedPriceRange.max || priceRange.max]}
          step={(priceRange.max - priceRange.min)/8}
          valueLabelDisplay="on"
          onChange={(event, newPriceRange) => onChangePrice(newPriceRange)}
          onChangeCommitted={(event, newPriceRange) => onChangePrice(newPriceRange)}
        />
      </CardContent>
    </Card>
  );
}
