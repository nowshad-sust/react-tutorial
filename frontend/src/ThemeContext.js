import { createContext } from "react";

const ThemeContext = createContext({ dark: false, toggle: () => {} });

export default ThemeContext;
