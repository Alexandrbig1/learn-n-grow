import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default RootLayout;
