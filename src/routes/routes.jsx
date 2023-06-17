import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Cart } from "../components/Cart/Cart";
import { Defaulters } from "../components/Defaulters/Defaulters";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/defaulters" element={<Defaulters />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
