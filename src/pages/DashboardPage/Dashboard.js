import {
    Container,
    Card,
    CardContent,
    Grid,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    Paper,
    Button,
    TextField,
    TableSortLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// importing products data
import products from "../../Data/Products";


const useStyles = makeStyles({
    styleAnchor: {
        textDecoration: 'none',
        color: 'black',
    },
    styleTextField: {
        width: '450px'
    }
})



export function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Container style={{ paddingBottom: '150px' }}>
                <div>
                    <Grid container>
                        <Grid item lg={2}>
                            <Card>
                                <CardContent>
                                    <ul>
                                        <li><a className={classes.styleAnchor} href="#"><h3>Dashboard</h3></a></li>
                                        <li><a className={classes.styleAnchor} href="#"><h3>Products</h3></a></li>
                                        <li><a className={classes.styleAnchor} href="#"><h3>Orders</h3></a></li>
                                        <li><a className={classes.styleAnchor} href="#"><h3>Profile</h3></a></li>
                                        <li><a className={classes.styleAnchor} href="#"><h3>Logout</h3></a></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={10}>
                            <Card style={{ marginLeft: '30px' }}>
                                <CardContent>
                                    <h1>Dashboard</h1>
                                    <h4 style={{ color: 'GrayText' }}>
                                        Hello, User  !
                                        From your My Account Dashboard you have the ability to view a snapshot of your recent account
                                        activity and update your account information. Select a link below to view or edit information.
                                    </h4>
                                    <h2>Account Information</h2>
                                    <h4 style={{ color: 'GrayText' }}>User Contact Number & Email</h4>
                                    <h3>Address</h3>
                                    <h4 style={{ color: 'GrayText' }}>User Address</h4>
                                </CardContent>
                            </Card>
                            <ProductsTable />
                            <OrderTable />
                            <Profile />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}



function ProductsTable() {
    return (
        <div style={{ marginLeft: '30px', width: '100%' }}>
            <h1>Products</h1>
            <Button variant='outlined' color='secondary' size='large' style={{marginBottom: '20px'}}><DeleteIcon/></Button>
            <Button variant='outlined' color='secondary' size='large' style={{margin: '0px 0px 20px 10px'}}><AddIcon /></Button> 
            <TableContainer component={Paper}>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell style={{paddingLeft: '40px'}}>Image</TableCell>
                            <TableCell >Title</TableCell>
                            <TableCell >Description</TableCell>
                            <TableCell align='right'>Price</TableCell>
                        </TableRow>
                    </TableHead>
                        {
                            products.map(product => (
                                    <TableRow>
                                        <TableCell >{product.id}</TableCell>
                                        <TableCell ><img style={{width: '100px',borderRadius: '100%'}} src={product.image} alt="image not found"/></TableCell>
                                        <TableCell >{product.title}</TableCell>
                                        <TableCell >{product.description}</TableCell>
                                        <TableCell >Rs. {product.price}</TableCell>
                                    </TableRow>
                            ))
                        }
                </Table>
            </TableContainer>
        </div>
    )
}


function OrderTable() {
    return(
        <div style={{marginLeft: '30px'}}>
            <h1>Order's are here...</h1>
        </div>
    )
}



function Profile(){
    const classes = useStyles();
    return(
        <div style={{marginLeft: '30px'}}>
            <h1>Profile</h1>
            <h2>Personal Details</h2>
            <Grid container>
                <h4>First Name</h4>
                <h4 style={{marginLeft: '405px'}}>Last Name</h4>
            </Grid>
            <TextField 
                className={classes.styleTextField}
                variant='outlined'
                label='Enter First Name'
            />
            <TextField 
                style={{marginLeft: '30px'}}
                className={classes.styleTextField}
                variant='outlined'
                label='Enter Last Name'
            />

            <Grid container>
                <h4>Phone Number</h4>
                <h4 style={{marginLeft: '380px'}}>Email</h4>
            </Grid>
            <TextField 
                className={classes.styleTextField}
                variant='outlined'
                label='Enter Phone Number'
            />
            <TextField 
                style={{marginLeft: '30px'}}
                className={classes.styleTextField}
                variant='outlined'
                label='Enter Email'
            />
            <br/>
            <h4>Write your Message</h4>
        </div>
    )
}

