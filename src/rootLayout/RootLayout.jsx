import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Menu from "../component/navbar/Menu";

const RootLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
