import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import "./styles.css";
import { Link } from "react-router-dom";

function Header({ options }) {
  return (
    <div className="header">
      <h1>Logo</h1>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box role="presentation" sx={{ width: "100%" }}>
          <List sx={{ width: "100%" }}>
            {options.map((option) => (
              <ListItem key={option.label} sx={{ width: "100%" }}>
                <ListItemButton
                  sx={{ width: "100%" }}
                  component={Link}
                  to={option.link}
                >
                  <div className="inner-button">
                    <div>{option.label}</div>
                    <div>{">"}</div>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
}

export { Header };
