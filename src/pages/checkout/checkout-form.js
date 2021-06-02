import {    TextField,Grid,Select,MenuItem,InputLabel, FormControl} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  stylingTextField: {
      width: '250px',
  }
})

export default function CheckoutForm() {
    const classes = useStyles();

    return (
      <>
                <h1>Checkout</h1>
                        <Grid container>
                            <h4>First Name</h4>
                            <h4 style={{ marginLeft: '220px' }}>Last Name</h4>
                        </Grid>
                        <TextField
                            className={classes.stylingTextField}
                            label='First Name'
                            variant='outlined'
                        />
                        <TextField
                            style={{ marginLeft: '40px' }}
                            className={classes.stylingTextField}
                            label='Last Name'
                            variant='outlined'
                        />
                        <Grid container>
                            <h4>Phone</h4>
                            <h4 style={{ marginLeft: '250px' }}>Email</h4>
                        </Grid>
                        <TextField
                            className={classes.stylingTextField}
                            label='Phone'
                            variant='outlined'
                        />
                        <TextField
                            style={{ marginLeft: '40px' }}
                            className={classes.stylingTextField}
                            label='Email'
                            variant='outlined'
                        />
                        <br />
                        <h4>City</h4>
                        <FormControl>
                            <InputLabel id='select'>Cities</InputLabel>
                            <Select labelId='select' style={{ width: '550px' }}>
                                <MenuItem value='Lahore'>Lahore</MenuItem>
                                <MenuItem value='Gujranwala'>Gujranwala</MenuItem>
                                <MenuItem value='Sheikhpura'>Sheikhpura</MenuItem>
                                <MenuItem value='Islamabad'>Islamabad</MenuItem>
                                <MenuItem value='Peshawar'>Peshawar</MenuItem>
                            </Select>
                        </FormControl>
                        <h4>Address</h4>
                        <TextField
                            style={{ width: '550px' }}
                            label='Address'
                            variant='outlined'
                        />
                    </>
    )
}