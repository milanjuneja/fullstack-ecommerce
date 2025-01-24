
import { ThemeProvider } from "@mui/material"
import Navbar from "./customer/components/Navbar/Navbar"
import CustomTheme from "./Theme/CustomTheme"
import Home from "./customer/pages/Home/Home"
import Product from "./customer/pages/Product/Product"
import ProductDetail from "./customer/pages/ProductDetails/ProductDetail"
import Review from "./customer/pages/Review/Review"
import Cart from "./customer/pages/Cart/Cart"

function App() {
  
  return (
    <>
    <ThemeProvider theme={CustomTheme} >
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product  /> */}
        {/* <ProductDetail /> */}
        {/* <Review /> */}
        <Cart />
      </div>
    </ThemeProvider>
      
    </>
  )
}

export default App
