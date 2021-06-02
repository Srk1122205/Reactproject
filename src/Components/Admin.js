import Container from "@material-ui/core/Container";
import { DataGrid , GridToolbarContainer , GridToolbarExport } from '@material-ui/data-grid'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'



const columns = [
    {
        field: 'categories',
        headerName: 'Categories',
        width: 210
    },
    {
        field: 'products',
        headerName: 'Products',
        width: 210
    },
    {
        field: 'orders',
        headerName: 'Orders',
        width: 210
    },
    {
        field: 'users',
        headerName: 'Users',
        width: 210
    },
    {
        field: 'logout',
        headerName: 'Logout',
        width: 210
    },
]

const rows = [
    { id: 1, categories: 'One', products: 'Krunch Burger', orders: 'Krunch Burger', users: 'Jamshaid', logout: 'naseer' },
    { id: 2, categories: 'Two', products: 'Zinger Burger', orders: 'Zinger Burger', users: 'Yasir', logout: 'Irfan' },
    { id: 3, categories: 'Three', products: 'Krunch Burger with Drink', orders: 'Krunch Burger with Drink', users: 'Minavar', logout: 'nasreen' },
    { id: 4, categories: 'Four', products: 'Rice and Spice', orders: 'Rice and Spice', users: 'Ahmad', logout: 'Yawar' },
    { id: 5, categories: 'Five', products: 'Zingeratha', orders: 'Zingeratha', users: 'Aisha', logout: 'Prveen' },
    { id: 6, categories: 'Six', products: 'Chicken and Rice', orders: 'Chicken and Rice', users: 'Jimmy', logout: 'Zahid' },
    { id: 7, categories: 'Seven', products: 'Boneless', orders: 'Boneless', users: 'Ameen', logout: 'Waheed' },
    { id: 8, categories: 'Eight', products: 'Krunch Combo', orders: 'Krunch Combo', users: 'Khubair', logout: 'Umair' },
    { id: 9, categories: 'Nine', products: 'Chicken & Chips', orders: 'Chicken & Chips', users: 'Umair', logout: 'Khubair' },
]



let customeGrid = () => {
    return(
        <GridToolbarContainer>
            <GridToolbarExport></GridToolbarExport>
        </GridToolbarContainer>
    )
}


export function AdminPanel() {
    return (
        <div>
            <Container>
                <h1>Welcome to Admin Panel</h1>
                <IconButton color='secondary'>
                    <AddIcon></AddIcon>
                </IconButton>
                <IconButton color='secondary'>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <Button style={{float:'right'}} variant='outlined' color='secondary'>Logout</Button>
                <div style={{ height: '400px' , width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                        components={{Toolbar: customeGrid}}
                    >
                    </DataGrid>
                </div>
            </Container>
        </div>
    )
}