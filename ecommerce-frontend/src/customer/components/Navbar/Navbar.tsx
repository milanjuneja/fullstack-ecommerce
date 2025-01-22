import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
function Navbar() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg font-bold md:text-2xl text-[#00927c]">
                Ecommerce Website
              </h1>
            </div>
            <ul className="flex items-center font-medium text-gray-800">
              {["Men", "Women", "Home & Furniture", "Electronics"].map(
                (item) => (
                  <li
                    key={item}
                    className="mainCategory hover:text-primary-color cursor-pointer hover:border-b-2 h-[70px] p-5 border-primary-color"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {false ? (
              <>
                <Button className="flex items-center gap-2">
                  <Avatar
                    sx={{ width: 29, height: 29 }}
                    src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"
                  />
                  <h1 className="font-semibold hidden lg:block">User</h1>
                </Button>
              </>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>

            {isLarge && (
              <Button
                startIcon={<StorefrontIcon />}
                variant="outlined"
                className="hidden lg:block"
              >
                Become seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Navbar;
