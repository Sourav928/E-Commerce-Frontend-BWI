import { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";

// import { useSelector, } from "react-redux";
// import { getProducts as listProducts } from "../../src/redux/actions/productActions.js";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  width: 100 %;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: 20px;
  width: 100%;
`;

const Search = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const [data, setData] = useState([]);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  // const fetchProducts = useSelector((state) => state.getProducts);
  // const { products } = fetchProducts;

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products.."
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && data && data.length > 0 && (
        <ListWrapper hidden={open}>
          {data
            .filter((product) =>
              product.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
