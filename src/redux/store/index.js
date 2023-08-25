import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products/productSlice";
import { heartProductsReducer } from "../features/products/heartProductSlice";
import { beautyProductsReducer } from "../features/products/beautyProductSlice";
import { bodyProductsReducer } from "../features/products/bodyProductSlice";
import { newProductsReducer } from "../features/products/newProductSlice";
import { hotProductsReducer } from "../features/products/hotProductSlice";
import { forYouProductsReducer } from "../features/products/forYouProductSlice";
import { favoriteProductsReducer } from "../features/products/favoriteProductSlice";
import { heightPlusProductsReducer } from "../features/products/heightPlusProductSlice";
import { hotBrandProductsReducer } from "../features/products/hotBrandProductSlice";
import { hotComboProductsReducer } from "../features/products/hotComboProductSlice";
import { allProductsReducer } from "../features/products/allProductSlice";

export const store = configureStore({
  reducer: {
    allProduct: allProductsReducer,
    product: productsReducer,
    heartProduct: heartProductsReducer,
    hotBrandProduct: hotBrandProductsReducer,
    hotComboProduct: hotComboProductsReducer,
    heightPlusProduct: heightPlusProductsReducer,
    beautyProduct: beautyProductsReducer,
    bodyProduct: bodyProductsReducer,
    newProduct: newProductsReducer,
    hotProduct: hotProductsReducer,
    forYouProduct: forYouProductsReducer,
    favoriteProduct: favoriteProductsReducer,
  },
});
