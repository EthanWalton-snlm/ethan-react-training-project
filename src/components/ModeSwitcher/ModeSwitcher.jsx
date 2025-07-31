import { useState, useEffect } from "react";
import { useColorScheme } from "@mui/joy/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "@mui/joy/Switch";
import "./styles.css";

export function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [checked, setChecked] = useState(mode === "dark");

  useEffect(() => {
    setChecked(mode === "dark");
  }, [mode]);

  const changeMode = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setMode(isChecked ? "dark" : "light");
  };

  return (
    <div className="mode-switcher">
      <Switch checked={checked} onChange={changeMode} />
      {checked ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "#0c1a27" }} />}
    </div>
  );
}
