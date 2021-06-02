import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Checkout from './pages/checkout';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function AppRouter() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/login-page">
          <Login />
        </Route>
        <Route path="/register-page">
          <Register />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default AppRouter;
