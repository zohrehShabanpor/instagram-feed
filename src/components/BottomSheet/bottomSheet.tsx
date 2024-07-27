/** @format */

import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import { memo } from "react";

import "./styles/bottom-sheet.scss";

export const BottomSheet = memo(
  ({
    onClose,
    onOpen,
    open,
    children,
    name,
  }: SwipeableDrawerProps & { name?: string }) => {
    return (
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        anchor="bottom"
        disableScrollLock
        disableSwipeToOpen
        classes={{
          paper: "bottom-sheet-component__paper",
        }}
      >
        <div className="bottom-sheet-component__header">
          <div className="bottom-sheet-component__header--puller"></div>
          <span className="bottom-sheet-component__header--name">{name}</span>
        </div>
        {children}
      </SwipeableDrawer>
    );
  }
);
