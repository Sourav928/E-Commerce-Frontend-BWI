import { AppBar, Toolbar, styled, Button, Box, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import { ShoppingCart } from "@mui/icons-material";

import Search from "./Search";
import { useSelector } from "react-redux";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Image = styled("img")({
  width: 50,
});

const Container = styled(Toolbar)`
  justify-content: space-between;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const LoginButton = styled(Button)`
  padding: 5px;
`;

const CartIcon = styled(Badge)`
  padding: 10px;
  margin: 10px;
`;

const Header = () => {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const imageURL = "https://pic.onlinewebfonts.com/thumbnails/icons_264570.svg";

  return (
    <Component>
      <Container>
        <Link to="/">
          <Image src={imageURL} alt="blog" />
        </Link>
        <Search />
        <Box>
          <CartIcon badgeContent={cartItems?.length} color="secondary">
            <ShoppingCart />
          </CartIcon>
          <Link to="/account">
            <LoginButton variant="outlined">Logout</LoginButton>
          </Link>
        </Box>
      </Container>
    </Component>
  );
};

export default Header;
