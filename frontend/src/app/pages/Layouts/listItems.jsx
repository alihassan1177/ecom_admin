import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/products">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/customers">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/categories">
      <ListItemButton>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/posts">
      <ListItemButton>
        <ListItemIcon>
          <DynamicFeedIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
