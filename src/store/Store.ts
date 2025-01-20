import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducer/CustomerSlice.ts";
import ItemSlice from "../reducer/ItemSlice.ts";

export const store = configureStore({
    reducer:{
        customer:CustomerSlice,
        item:ItemSlice
    }
});