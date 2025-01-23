
import { ThemeProvider } from "@mui/material"
import Navbar from "./customer/components/Navbar/Navbar"
import CustomTheme from "./Theme/CustomTheme"
import Home from "./customer/pages/Home/Home"
import Product from "./customer/pages/Product/Product"

function App() {
  
  return (
    <>
    <ThemeProvider theme={CustomTheme} >
      <div>
        <Navbar />
        {/* <Home /> */}
        <Product  />
      </div>
    </ThemeProvider>
      
    </>
  )
}

export default App
