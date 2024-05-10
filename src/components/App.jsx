import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "../layouts/RootLayout";
import { lazy, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const theme = {
  light: {
    colors: {
      mainBgColor: "#f1f5f9",
      mainBgColorLowOp: "#3e3e3e10",
      accentColor: "#00b4d8",
      accentColorLowOp: "#00b4d830",
      accentColorHover: "#0090ad",
      headerBgColor: "#00b4d8",
      mainTextColor: "#121417",
      mainTextColorRev: "#f1f5f9",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#242424",
      mainBgColorLowOp: "#f1f5f920",
      accentColor: "#bfd6ea",
      accentColorLowOp: "#bfd6ea30",
      accentColorHover: "#99abbb",
      headerBgColor: "#00b4d8",
      mainTextColor: "#f8fafc",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

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
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
