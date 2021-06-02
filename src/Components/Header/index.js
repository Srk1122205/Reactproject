import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import {CartContext} from '../../helpers/CartProvider';
import { useContext } from "react";

const image = "/images/logo.jpg";

const useStyles = makeStyles({
  stylingTextField: {
    marginLeft: "550px",
    width: "340px",
    paddingTop: "25px",
  },
  settingImage: {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    paddingTop: "20px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cartButton: {
    marginLeft: "500px",
  },
});

export default function Header() {
  const {totalCartItems} = useContext(CartContext);
  const classes = useStyles();

  return (
    <Container>
      <AppBar
        style={{ height: "90px", background: "#3f51b5", color: "none" }}
        position="static"
      >
        <Toolbar>
          <img
            className={classes.settingImage}
            src={image}
            alt="imge not found"
          />
          <Link to="/" className={classes.link}>
            <Button
              style={{ margin: "20px 0px 0px 10px" }}
              size="small"
              color="inherit"
              startIcon={<HomeIcon />}
            >
              home
            </Button>
          </Link>
          <Link to="/collection" className={classes.link}>
            <Button
              style={{ marginTop: "20px" }}
              size="small"
              color="inherit"
              startIcon={<MenuIcon />}
            >
              menu
            </Button>
          </Link>
          <Link to="/about-us" className={classes.link}>
            <Button
              style={{ marginTop: "20px" }}
              size="small"
              color="inherit"
              startIcon={<InfoIcon />}
            >
              about us
            </Button>
          </Link>
          <Link to="/contact-us" className={classes.link}>
            <Button
              style={{ marginTop: "20px" }}
              size="small"
              color="inherit"
              startIcon={<ContactMailIcon />}
            >
              contact us
            </Button>
          </Link>
          <Link to="/cart">
            <Badge
              badgeContent={totalCartItems}
              showZero={true}
              color="secondary"
              style={{ marginTop: "20px" }}
            >
              <IconButton className={classes.cartButton}>
                {" "}
                <ShoppingCartIcon />{" "}
              </IconButton>
            </Badge>
          </Link>
          <FormControl style={{ width: "200px" }}>
            <InputLabel>Profile</InputLabel>
            <Select>
              <MenuItem value="login">
                <Link to="/login-page" className={classes.link}>
                  <Button
                    style={{ marginTop: "20px" }}
                    color="inherit"
                    size="small"
                  >
                    Login
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem value="register">
                <Link to="/register-page" className={classes.link}>
                  <Button
                    style={{ marginTop: "20px" }}
                    color="inherit"
                    size="small"
                  >
                    Register
                  </Button>
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
