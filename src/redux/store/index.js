import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products/productSlice";
import { heartProductsReducer } from "../features/products/heartProductSlice";
import { beautyProductsReducer } from "../features/products/beautyProductSlice";
import { bodyProductsReducer } from "../features/products/bodyProductSlice";
// import { newProductsReducer } from "../features/products/newProductSlice";
// import { hotProductsReducer } from "../features/products/hotProductSlice";
// import { forYouProductsReducer } from "../features/products/forYouProductSlice";

export const store = configureStore({
  reducer: {
    product: productsReducer,
    heartProducts: heartProductsReducer,
    beautyProducts: beautyProductsReducer,
    bodyProducts: bodyProductsReducer,
    // newProducts: newProductsReducer,
    // hotProducts: hotProductsReducer,
    // forYouProducts: forYouProductsReducer,
  },
});
