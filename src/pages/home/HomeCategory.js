import {
    Grid,
    Container,
    ButtonBase,
    Card,
    CardContent
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import {categories} from "../../data/category";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
                textTransform: 'uppercase'
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    styleHeading: {
        textAlign: 'center',
        marginTop: '40px'
    },
    styleLine: {
        width: '100px',
        border: '2px solid orange',
        backgroundColor: 'orange'
    },
}));

const CategoryRow = ({ category, row }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item lg={6} xs={12} md={6} style={{ order: row % 2 ? 2 : 1 }}>
                <Card style={{ marginTop: '60px' }}>
                    <Link to='/menu'>
                    <CardContent>
                        <ButtonBase
                            focusRipple
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{ width: '100%' }}

                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${category.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {category.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    </CardContent>
                    </Link>
                </Card>
            </Grid>
            <Grid item lg={6} xs={12} md={6} style={{ order: row % 2 ? 1 : 2 }}>
                <h3 style={{ marginTop: '110px' }}>{category.description}</h3>
                <h4>{category.subDescription}</h4>
            </Grid>
        </Grid>
    )
}


const MoreCategory = () => {
    const classes = useStyles();
    return (
        categories.map(data => (
            <ButtonBase
                focusRipple
                key={data.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: data.width,
                  }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${data.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {data.title}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        ))

    )
}


export function HomeCategory() {
    const classes = useStyles();
    return (
        <Container>
            <MoreCategory />
            <h1 className={classes.styleHeading}>Explor Categories</h1>
            <hr className={classes.styleLine} />
            {
                categories.map((category, index) => <CategoryRow key={index} category={category} row={index} />)
            }

        </Container>
    )
}


