import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    stylingBreadCrumb: {
        width: '100%',
        margin: '30px 0px 0px 0px',
        color: 'crimson'
    }
})

export default function MyBreadcrumbs() {
    const classes = useStyles();
    return (
        <div>
            <Container>

            <Breadcrumbs className={classes.stylingBreadCrumb}>
                <Link color='inherit' href=''>Home</Link>
                <Link color='inherit' href="">Menu</Link>
            </Breadcrumbs>
            </Container>
        </div>
    )

}