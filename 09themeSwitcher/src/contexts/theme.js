import { createContext, useContext } from "react";
import React from "react";
// create context ke ander hum variable,function ya fir object bhi pass kar skte hain or yeah empty bh iho sakta hai
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// provider ki alag file bna skte hai ya phir yahi se export kar sakte hain
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
