import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/reducer";
import logger from "redux-logger";
export const appStore = configureStore({
    reducer:{ appReducer },
    middleware:()=>{
        // only for testing not for production
        return [logger]
    }
})