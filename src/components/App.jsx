import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import { useState } from "react";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import NotFound from "../pages/NotFound/NotFound";

const theme = {
  light: {
    colors: {
      mainBgColor: "#f1f5f9",
      mainBgColorLowOp: "#3e3e3e10",
      accentColor: "#00b4d8",
      accentColorHover: "#0090ad",
      mainTextColor: "#121417",
      mainTextColorRev: "#f1f5f9",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#242424",
      mainBgColorLowOp: "#f1f5f920",
      accentColor: "#bfd6ea",
      accentColorHover: "#99abbb",
      mainTextColor: "#121417",
    },
  },
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        }
      >
        <Route index element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
