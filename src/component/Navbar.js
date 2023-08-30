import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button directly
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../Firebases/setup";

export default function Navbar() {
  const [authData, setAuthData] = useState([]); // Initialize authData as null
  const [user, setuser] = useState([]);
  const signInGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, googleAuthProvider);
      setAuthData(data);
      setuser(false);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      //   await signOut(auth);
      await signOut(auth);
      setuser(false); // Update the user state after logout
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#F0F0F0" }} elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" sx={{ color: "black" }} component="div">
            TV9 News Report
          </Typography>
          <Typography
            sx={{ ml: "1000px", color: "black" }}
            variant="h6"
            component="div"
          >
            {authData?.user?.displayName}
          </Typography>
          {user ? (
            <Button
              onClick={signInGoogle}
              sx={{ marginLeft: "10px", color: "black", bgcolor: "white" }} // Adjust spacing
              variant="contained"
              size="small"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={logout}
              variant="contained"
              size="small"
              sx={{ marginLeft: "10px", color: "black", bgcolor: "white" }} // Adjust spacing
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
