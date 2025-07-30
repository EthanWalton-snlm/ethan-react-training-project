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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useColorScheme } from "@mui/joy/styles";

function Header({ options, modeSwitcher }) {
  const { mode } = useColorScheme();

  return (
    <div className="header">
      <div className="switcher">{modeSwitcher}</div>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box role="presentation" sx={{ width: "100%" }}>
          <List sx={{ width: "100%" }} className="header-list">
            {options.map((option) => (
              <ListItem key={option.label} sx={{ width: "100%" }}>
                <Button
                  component={Link}
                  to={option.link}
                  className="header-button"
                  color={mode === "dark" ? "#0c1a27" : "#096bde"}
                >
                  <div className="inner-button">
                    <div>{option.label}</div>
                    <div>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
}

export { Header };
