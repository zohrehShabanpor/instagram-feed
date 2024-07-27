/** @format */

import { memo } from "react";
import "./styles/navbar.scss";
import { AccountCircle, ControlPoint, Home, Search } from "@mui/icons-material";

export const Navbar = memo(() => {
  return (
    <div className="navbar-component">
      <Home />
      <Search />
      <ControlPoint />
      <AccountCircle />
    </div>
  );
});
