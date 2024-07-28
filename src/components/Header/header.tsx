/** @format */

import { FavoriteBorder, Send } from "@mui/icons-material";
import { memo } from "react";

import "./styles/header.scss";

import { SVG } from "../SVG/svg";

export const Header = memo(() => {
  return (
    <div className="header-component">
      <SVG path="/instagram.svg" />
      <div className="header-component__actions">
        <FavoriteBorder />
        <Send />
      </div>
    </div>
  );
});
