import config from "@config/config.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme_switcher } = config.settings;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

 
};

export default ThemeSwitcher;
