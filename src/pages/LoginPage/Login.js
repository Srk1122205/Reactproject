import { Container, Card, CardContent, TextField, Grid, Checkbox, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    body: {
        paddingBottom: '150px'
    },
    stylingTextField: {
        width: '500px',
        marginTop: '20px'
    },
    stylingCard: {
        width: '700px',
        margin: '20px 0px 0px 300px',
        textAlign: 'center',
    },
    stylingButton: {
        margin: '10px 410px 0px 0px'
    }
})


export function Login() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.body}>
                <h1 style={{marginLeft: '300px'}}>Login</h1>
                <Card className={classes.stylingCard}>
                    <CardContent>
                        <TextField
                            className={classes.stylingTextField}
                            variant='outlined'
                            label='Enter Username or Email'
                        />
                        <br />
                        <TextField
                            className={classes.stylingTextField}
                            variant='outlined'
                            label='Enter Password'
                            type='password'
                            onChange={(e)=>console.log(e.target.value)}
                       />
                                                   <br/>
                        <Button className={classes.stylingButton} size='large' variant='contained' color='secondary'>Login</Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}