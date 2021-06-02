import AppRouter from './AppRouter';
import { ToastContainer } from "react-toastify";
import CartProvider from './helpers/CartProvider';
import './App.css';

function App() {
  return (

    <div style={{overflow: 'hidden'}}>
      <ToastContainer />
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;
