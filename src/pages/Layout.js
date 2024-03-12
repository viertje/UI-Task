import Header from "../components/Header/Header.js";
import { Outlet } from "react-router-dom";
import Slot from "../components/Slot/Slot.js";

const Layout = () => {
  return (
    <>
        <Header />
        <Slot / >

        <Outlet />
    </>
  )
};

export default Layout;
