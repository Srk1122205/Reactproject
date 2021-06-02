import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    stylingAnchor: {
        color: 'Black',
        textDecoration: 'none',
        color: 'white',
        
    },
    stylingFooter: {
        backgroundColor: '#3f51b5',
        color: 'white',
        marginTop: '30px'
    }
})


export default function Footer() {
    const classes = useStyles();
    return(
            <Container className={classes.stylingFooter}>
                <Grid container>
                    <Grid item lg={3} xs={12}>
                        <h2>Information</h2>
                        <p><a className={classes.stylingAnchor} href="">About Us</a></p>
                        <p><a className={classes.stylingAnchor} href="">Mitao Book</a></p>
                        <p><a className={classes.stylingAnchor} href="">Privacy Policy</a></p>
                        <p><a className={classes.stylingAnchor} href="">Careers</a></p>
                    </Grid>

                    <Grid item lg={3} xs={12}>
                        <h2>Food</h2>
                        <p><a className={classes.stylingAnchor} href="">Our Secret Policy</a></p>
                    </Grid>

                    <Grid item lg={3} xs={12}>
                        <h2>Locations</h2>
                        <p><a className={classes.stylingAnchor} href="">Find a Store</a></p>
                    </Grid>

                    <Grid item lg={3} xs={12}>
                        <h2>Get in Touch</h2>
                        <p><a className={classes.stylingAnchor} href="">Contact Us</a></p>
                        <p><a className={classes.stylingAnchor} href="">Join Us</a></p>
                        <p><a className={classes.stylingAnchor} href="">Terms & Conditions</a></p>
                    </Grid>
                </Grid>
            </Container>
    )
}