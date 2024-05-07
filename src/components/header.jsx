import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import logo from "./logo3.png"
import "../App.css"

const StyledHeader = styled("header")({
  height: "80px",
  width: "100%",
  position: "fixed",
  backgroundColor: "#eeeeee",
  zIndex: 1000,
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
});

const StyledNav = styled("nav")({
  paddingLeft:"10px",
  display:"inline-block"
});

function Header() {
 

  return (
    <StyledHeader>
      <div style={{ margin: "15px" }}>
        <div className="font-container">
        <h1 style={{margin:"0"}}>Who follows you back?</h1>
        </div>
        <StyledNav>
            <Link to="/">Home</Link> | <Link to="/instructions">Instructions</Link> 
        </StyledNav>
         </div>
        <div style={{ paddingTop:"22px"}}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "250px", height: "250px" }}
        />
       
      </div>
    </StyledHeader>
  );
}

export default Header;
