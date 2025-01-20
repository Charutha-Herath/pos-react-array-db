import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducer/CustomerSlice.ts";

export const store = configureStore({
    reducer:{
        customer:CustomerSlice
    }
});