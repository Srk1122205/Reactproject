import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from "@material-ui/lab/Rating";
import {Link} from 'react-router-dom';
import { reviews } from "../../data/reviews";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    media: {
        height: 300,
        width: "100%"
    },
    content: {
        height: '130px'
    },
    countReviewHeading: {
        padding: '2px 0px 0px 5px'
    },
    button: {
        width: '100%'
    },
});

export function ProductCard(props) {
    const { id, image, title, description, price, rating } = props.product
    const classes = useStyles();
    const countReviews = reviews.length;

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h5">
                    <Link to={`/detail/${id}`}> {title} </Link>
                    </Typography>
                    <Grid container>
                        <Rating
                            value={rating}
                            readOnly
                            name='half-rating'
                        />
                        <Typography className={classes.countReviewHeading} component='h6'>({countReviews})</Typography>
                    </Grid>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Rs. {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button  fullWidth='true' startIcon={<FavoriteIcon />} size="small" color="primary">
                    add to fav
                </Button>
                <Button fullWidth='true' startIcon={<ShoppingCartIcon />} size="small" color="primary">
                    add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}