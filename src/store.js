import { configureStore } from "@reduxjs/toolkit";
import asdReducer from "./store/asd"


const store = configureStore({
    asd: asdReducer
})

export default store