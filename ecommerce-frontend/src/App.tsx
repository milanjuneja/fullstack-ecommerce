import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import CustomTheme from "./Theme/CustomTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetail from "./customer/pages/ProductDetails/ProductDetail";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Account from "./customer/pages/Account/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <div>
          <Navbar />
          {/* <Home /> */}
          {/* <Product  /> */}
          {/* <ProductDetail /> */}
          {/* <Review /> */}
          {/* <Cart /> */}
          {/* <Checkout /> */}
          {/* <Account /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/reviews/:productId" element={<Review />} />
            <Route
              path="/product-details/:category/:name/:productId"
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/products/:category" element={<Checkout />}/> */}
            <Route path="/account/*" element={<Account />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
