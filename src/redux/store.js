import { configureStore } from "@reduxjs/toolkit";
import { customeReducer } from "./Reducers";

const store = configureStore({
    reducer: {
        custom: customeReducer,
    },
});

export default store;