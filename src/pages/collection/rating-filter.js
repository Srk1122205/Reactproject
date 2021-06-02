import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  typograpy: {
    padding: "5px 5px 5px 5px",
  },
  card: {
    marginTop: '10px'
  }
});

export default function RatingFilter(props) {
  let { selectedRating, setSelectedRating } = props;
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="button" component="div">Rating</Typography>
        {[5, 4, 3, 2, 1].map(rating => (
          <Grid container key={rating} onClick={() => setSelectedRating(rating)}>
            <Rating value={rating} readOnly 
              style={{color: rating === Number(selectedRating) ? '#ff3d47' : ''}} />
            <Typography className={classes.typograpy}>
              {rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
            </Typography>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
}
