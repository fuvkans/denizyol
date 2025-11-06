import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import SubNavbar from "./components/SubNavbar.jsx";
import Home from "./pages/Home";
import Address from "./pages/Address";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

import Fashion from "./catalog/Fashion";
import Electronics from "./catalog/Electronics";
import HomeLiving from "./catalog/HomeLiving";
import Beauty from "./catalog/Beauty";
import Sports from "./catalog/Sports";

import { item } from "./data/data.js";

export default function App() {
  const location = useLocation();

  const subNavPaths = [
    "/fashion",
    "/electronics",
    "/home-living",
    "/beauty",
    "/sports",
  ];

  const isSubNavPage = subNavPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const isHomePage = location.pathname === "/";
  const showSubNavbar = isHomePage || isSubNavPage;

  return (
    <>
      <NavBar />
      {showSubNavbar && <SubNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Address />} />
        <Route path="/favorites" element={<Favorites items={item} />} />
        <Route path="/cart" element={<Cart items={item} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/home-living" element={<HomeLiving />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </>
  );
}
