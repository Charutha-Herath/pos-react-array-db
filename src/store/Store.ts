import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducer/CustomerSlice.ts";
import ItemSlice from "../reducer/ItemSlice.ts";
import OrderSlice from "../reducer/OrderSlice.ts";
import OrderDetailSlice from "../reducer/OrderDetailSlice.ts";

export const store = configureStore({
    reducer:{
        customer:CustomerSlice,
        item:ItemSlice,
        orders:OrderSlice,
        cart:OrderDetailSlice

    }
});