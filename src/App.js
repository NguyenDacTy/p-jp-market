import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout/index.jsx";
import AllProduct from "./pages/AllProduct";
import { ROUTES } from "./const/routes";
import Cart from "./pages/Cart";
import PaymentProduct from "./pages/PaymentProduct";
import BeautyProduct from "./pages/Product/BeautyProduct";
import BodyProduct from "./pages/Product/BodyProduct";
import HeartProduct from "./pages/Product/HeartProduct";
import HotProduct from "./pages/Product/HotProduct";
import NewProduct from "./pages/Product/NewProduct";
import PotionProduct from "./pages/Product/PotionProduct";
import ForyouProduct from "./components/HeaderComponent/ForyouProduct";
import FavoriteProduct from "./components/HeaderComponent/FavoriteProduct";
import HotBrand from "./pages/Product/HotBrand";
import HotCombo from "./pages/Product/HotCombo";
import HeightPlus from "./pages/Product/HeightPlus";
import RegisterPage from "./pages/Acount/Register";
import Acount from "./pages/Acount";
import DetailProduct from "./pages/DetailProduct";
import { useState } from "react";

function App() {
  const [qtyCart, setQtyCart] = useState(0);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              element={<MainLayout setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            >
              <Route
                index
                element={
                  <AllProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
                }
              />
              <Route
                path={ROUTES.ALL_PRODUCT}
                element={
                  <AllProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
                }
              />
            </Route>
            <Route
              path={ROUTES.CART}
              element={<Cart setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.PAYMENT_PRODUCT}
              element={
                <PaymentProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.BEAUTY_PRODUCT}
              element={
                <BeautyProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.BODY_PRODUCT}
              element={
                <BodyProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.HEART_PRODUCT}
              element={
                <HeartProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.HOT_PRODUCT}
              element={<HotProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.NEW_PRODUCT}
              element={<NewProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.POTION_PRODUCT}
              element={
                <PotionProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.FORYOU_PRODUCT}
              element={
                <ForyouProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.FAVORITE_PRODUCT}
              element={
                <FavoriteProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
            <Route
              path={ROUTES.BEST_SELLER}
              element={<HotProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.HOT_BRAND}
              element={<HotBrand setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.HOT_COMBO}
              element={<HotCombo setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route
              path={ROUTES.HEIGHT_PLUS}
              element={<HeightPlus setQtyCart={setQtyCart} qtyCart={qtyCart} />}
            />
            <Route path={ROUTES.ACOUNT_LOGIN} element={<Acount />} />
            <Route path={ROUTES.ACOUNT_REGISTER} element={<RegisterPage />} />
            <Route
              path={ROUTES.DETAIL_PRODUCT}
              element={
                <DetailProduct setQtyCart={setQtyCart} qtyCart={qtyCart} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
