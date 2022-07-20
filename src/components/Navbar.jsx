import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { deleteUser, getCurrentUser } from "./Storage";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  // lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function closeSesion() {
    setUser(null);
    deleteUser();
    navigate("/login", { replace: true });
  }

  return (
    <Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
      <Box
        color="white"
        display="flex"
        margin="auto"
        maxW="920px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          to={!getCurrentUser() ? "/login" : "/discussions"}
          {...linkStyles}
        >
          Chaos news
        </Link>
        ----|----
        <Link to="/" {...linkStyles}>
          Team
        </Link>
        {user ? (
          <>
            <Box ml={"auto"}>{user.username}</Box>
            <Button
              onClick={closeSesion}
              background="rgb(255,102,0)"
              color="white"
            >
              {" "}
              Logout{" "}
            </Button>
          </>
        ) : (
          <Link to="/login" {...linkStyles}>
            Login
          </Link>
        )}
      </Box>
    </Box>
  );
}
export default Navbar;
