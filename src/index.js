import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SBB from "./pages/SBB";
import MerchStore from "./pages/MerchStore";
import OrderPage from "./pages/OrderPage";
import NoPage from "./pages/NoPage";
import ListPage from "./pages/ListPage";
import DataFetch from "./pages/DataFetch";
import './index.css'
import LocalFetchPage from "./pages/LocalFetchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ListPage" element={<ListPage />} />
          <Route path="SBB" element={<SBB />} />
          <Route path="merchstore" element ={<MerchStore />} />
          <Route path="OrderPage" element ={<OrderPage />} />
          <Route path="DataFetch" element={<DataFetch />} />
          <Route path="LocalFetchPage" element={<LocalFetchPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);