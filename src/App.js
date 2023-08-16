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
import MomAndBaby from "./components/HeaderComponent/MomAndBaby";
import BestSeller from "./pages/Product/BestSeller";
import HotBrand from "./pages/Product/HotBrand";
import HotCombo from "./pages/Product/HotCombo";
import HeightPlus from "./pages/Product/HeightPlus";
import RegisterPage from "./pages/Acount/Register";
import Acount from "./pages/Acount";
import DetailProduct from "./pages/DetailProduct";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<AllProduct />} />
            <Route path={ROUTES.ALL_PRODUCT} element={<AllProduct />} />
          </Route>
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.PAYMENT_PRODUCT} element={<PaymentProduct />} />
          <Route path={ROUTES.BEAUTY_PRODUCT} element={<BeautyProduct />} />
          <Route path={ROUTES.BODY_PRODUCT} element={<BodyProduct />} />
          <Route path={ROUTES.HEART_PRODUCT} element={<HeartProduct />} />
          <Route path={ROUTES.HOT_PRODUCT} element={<HotProduct />} />
          <Route path={ROUTES.NEW_PRODUCT} element={<NewProduct />} />
          <Route path={ROUTES.POTION_PRODUCT} element={<PotionProduct />} />
          <Route path={ROUTES.FORYOU_PRODUCT} element={<ForyouProduct />} />
          <Route path={ROUTES.FAVORITE_PRODUCT} element={<FavoriteProduct />} />
          <Route path={ROUTES.MOM_AND_BABY_PRODUCT} element={<MomAndBaby />} />
          <Route path={ROUTES.BEST_SELLER} element={<BestSeller />} />
          <Route path={ROUTES.HOT_BRAND} element={<HotBrand />} />
          <Route path={ROUTES.HOT_COMBO} element={<HotCombo />} />
          <Route path={ROUTES.HEIGHT_PLUS} element={<HeightPlus />} />
          <Route path={ROUTES.ACOUNT_LOGIN} element={<Acount />} />
          <Route path={ROUTES.ACOUNT_REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.DETAIL_PRODUCT} element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
