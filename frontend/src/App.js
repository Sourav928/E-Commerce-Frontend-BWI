import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import Header from "./components/Header";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("token");
  return isAuthenticated && token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/account" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/account"
          element={<Login isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
