import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    currency : "inr" ,
    currencySymbol : "₹",
}


export const customeReducer = createReducer(initialState , {
    changeCurrencyToINR : (state) => {
        state.currency = "inr";
        state.currencySymbol = "₹";
    },
    changeCurrencyToEUR : (state) => {
        state.currency = "eur";
        state.currencySymbol = "€";
    },
    changeCurrencyToUSD : (state) => {
        state.currency = "usd";
        state.currencySymbol = "$";
    },
})