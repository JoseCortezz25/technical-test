import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Cart } from "../components/Cart/Cart";
import { Defaulters } from "../components/Defaulters/Defaulters";
import { CartContextProvider } from "../context/cart";
import { UserContextProvider } from "../context/user";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/defaulters" element={<Defaulters />} />
            </Routes>
          </MainLayout>
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
