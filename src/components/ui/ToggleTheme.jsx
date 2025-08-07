import { Switch } from "./switch";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
      <Switch
        id="theme-toggle"
        checked={isDark}
        onCheckedChange={toggleTheme}
        className={"scale-150 cursor-pointer"}
      />
  );
}