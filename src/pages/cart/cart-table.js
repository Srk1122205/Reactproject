import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CartRow } from "./cart-row";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    styleImage: {
        width: '100px',
        borderRadius: '50%'
    },
    table: {
        minWidth: 650
    },
    checkoutButton: {
        float: 'right',
        marginTop: '20px'
    },
    collectionButton: {
        marginTop: '20px'
    },
    grandTotalHeading: {
        marginTop: '20px'
    }
})

export function CartTable(props) {
    let history = useHistory();
    const classes = useStyles();

    return (
        <Container>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <CartRow {...props}/>
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item lg={4} xs={4}>
                    <Button 
                    onClick={() => history.push('/collection')}
                    className={classes.collectionButton} variant='outlined' color='secondary'>Continue Shopping</Button>
                </Grid>
                <Grid item lg={4} xs={4}>
                    <Typography className={classes.grandTotalHeading} component='h3'>Grand Total: Rs. {props.cartTotal}</Typography>
                </Grid>
                <Grid item lg={4} xs={4}>
                    <Button 
                    onClick={() => history.push('/checkout')}
                    className={classes.checkoutButton} variant='outlined' color='secondary'>Proceed to Checkout</Button>
                </Grid>
            </Grid>
        </Container>
    )
}





// export const TableHeader = () => {
//     const classes = useStyles(); 

//     return (
//         <TableContainer component='Paper'>
//             <Table className={classes.table}>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>ID</TableCell>
//                         <TableCell>IMAGE</TableCell>
//                         <TableCell>TITLE</TableCell>
//                         <TableCell>DESCRIPTION</TableCell>
//                         <TableCell>PRICE</TableCell>
//                     </TableRow>
//                 </TableHead>

//             </Table>
//         </TableContainer>
//     )
// }

