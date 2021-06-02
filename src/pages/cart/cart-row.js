import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
    styleImage: {
        width: '100px',
        borderRadius: '50%'
    },
    button: {
        borderRadius: '100%'
    }
})

export function CartRow(props) {
    const {
      cartItems,
      removeFromCart,
      updateQuantity
    } = props;  
    const classes = useStyles();
  
    return (
        cartItems.map((item, i) => (
            <TableRow id={item.id + '-' + item.drink}>
                <TableCell>{i+1}</TableCell>
                <TableCell><img className={classes.styleImage} src={item.image} alt="item not found" /></TableCell>
                <TableCell>
                  {item.title}<br />{item.drink}
                  </TableCell>
                <TableCell>{item.cartQuantity} x Rs. {item.price}</TableCell>
                <TableCell>
                    <ButtonGroup size='small' variant='outlined' color='secondary'>
                        <Button onClick={() => updateQuantity(item, -1)} disabled={item.cartQuantity === 1}>-</Button>
                        <Button>{item.cartQuantity}</Button>
                        <Button onClick={() => updateQuantity(item, 1)} disabled={item.cartQuantity === 10}>+</Button>
                    </ButtonGroup>
                </TableCell>
                <TableCell><Button onClick={() => removeFromCart(item)} className={classes.button} startIcon={<DeleteIcon />} color='secondary'></Button></TableCell>
            </TableRow>
        ))
    )
}
