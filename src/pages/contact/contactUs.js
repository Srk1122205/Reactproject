import {
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    Button
} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

export function ContactUs() {
    return (
        <div>
            <Container>
                <h1>Contact</h1>
                <Grid container spacing={5}>
                    <Grid item lg={6} xs={12}>
                        <img style={{ height: '500px', width: '100%' }} src="/images/map.gif" alt="image not found" />
                    </Grid>
                    <Grid item lg={6} xs={12} style={{ paddingTop: '100px' }}>
                        <Grid container>
                            <Grid item style={{ color: '#ff4c3b', padding: '15px 0px 0px 20px' }}>
                                <PhoneIcon />
                                <h3>Contact Us</h3>
                            </Grid>
                            <Grid item style={{ paddingLeft: '50px' }}>
                                <h4>+91 123 - 456 - 7890</h4>
                                <h4>+86 163 - 451 - 7894</h4>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item style={{ color: '#ff4c3b', padding: '15px 0px 0px 20px' }}>
                                <HomeIcon />
                                <h3>Address</h3>
                            </Grid>
                            <Grid item style={{ paddingLeft: '80px' }}>
                                <h4>ABC Complex,Near xyz, New York</h4>
                                <h4>USA 123456</h4>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item style={{ color: '#ff4c3b', padding: '15px 0px 0px 20px' }}>
                                <EmailIcon />
                                <h3>Email</h3>
                            </Grid>
                            <Grid item style={{ paddingLeft: '100px' }}>
                                <h4>Support@Shopcart.com</h4>
                                <h4>info@shopcart.com</h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ContactForm />
            </Container>
        </div>
    )
}

let ContactForm = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item lg={6} xs={12}><h4>First Name</h4></Grid>
                <Grid item lg={6} xs={12}><h4>Last Name</h4></Grid>
                <Grid item lg={6} xs={12}>
                    <TextField
                        style={{ width: '100%' }}
                        variant='outlined'
                        label='First Name'
                    >
                    </TextField>
                </Grid>

                <Grid item lg={6} xs={12}>
                    <TextField
                        style={{ width: '600px' }}
                        variant='outlined'
                        label='Last Name'
                    >
                    </TextField>
                </Grid>
                <Grid item lg={6} xs={12}><h4>Phone Number</h4></Grid>
                <Grid item lg={6} xs={12}><h4 style={{ marginLeft: '10px' }}>Email</h4></Grid>
                <Grid lg={6} xs={12}>
                    <TextField
                        style={{ width: '100%' }}
                        variant='outlined'
                        label='Phone Number'
                    >
                    </TextField>
                </Grid>

                <Grid lg={6} xs={12}>
                    <TextField
                        style={{ width: '600px', marginLeft: '8px' }}
                        variant='outlined'
                        label='Email'
                    >
                    </TextField>
                </Grid>
                <Grid item lg={12} xs={12}><h4>Write Your Message</h4></Grid>
                <Grid item lg={12} xs={12}>
                    <TextareaAutosize
                        style={{width: '100%', height: '200px'}}
                    >
                    </TextareaAutosize>
                </Grid>
                <Button variant='outlined' color='secondary' size='large' style={{ margin: '20px 0px 50px 0px' }}>Send Message</Button>
            </Grid>
        </div>
    )
}