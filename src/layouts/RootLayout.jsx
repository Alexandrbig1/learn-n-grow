import { Suspense } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

// eslint-disable-next-line react/prop-types
function RootLayout({ toggleTheme, isDarkTheme }) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default RootLayout;
