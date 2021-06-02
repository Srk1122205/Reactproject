import { Container, Card, CardContent, Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    stylingTextField: {
        width: '500px',
        margin: '0px 0px 10px 0px'
    }
})



export function Register() {
    const classes = useStyles();
    return (
        <div>
            <Container style={{paddingBottom: '100px'}}>
                <h1>Register</h1>
                <Card>
                    <CardContent>
                        <Grid container>
                            <h4>First Name</h4>
                            <h4 style={{marginLeft: '500px'}}>Second Name</h4>
                        </Grid>
                        <Grid container>
                            <TextField
                                className={classes.stylingTextField}
                                label="First Name"
                                variant='outlined'
                            />
                            <TextField
                                style={{ marginLeft: '80px' }}
                                className={classes.stylingTextField}
                                label="Second Name"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid container>
                            <h4>Email</h4>
                            <h4 style={{marginLeft: '540px'}}>Password</h4>
                        </Grid>
                        <Grid container>
                        <TextField
                                className={classes.stylingTextField}
                                label="Email"
                                variant='outlined'
                            />
                            <TextField
                                style={{ marginLeft: '80px' }}
                                className={classes.stylingTextField}
                                label="Password"
                                variant='outlined'
                                type='password'
                            />
                        </Grid>
                        <br/>
                        <Button variant='outlined' color='secondary' size='large'>Register</Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}