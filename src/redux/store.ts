import {combineReducers, compose, createStore} from "@reduxjs/toolkit";
import HomePageSlice from "./HomePageSlice";


const rootReducer=combineReducers({
    homePage:HomePageSlice
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(rootReducer,composeEnhancers())

export type rootReducerType=ReturnType<typeof rootReducer>
