import { configureStore, combineReducers } from "@reduxjs/toolkit";
import siteReducer from './siteSlice'
import categoryReducer from './categorySlice'
import brandReducer from './brandSlice'
import modelReducer from './modelSlice'

/*
export default configureStore({
    reducer : {
        site        : siteReducer,
        category    : categoryReducer,
        brand       : brandReducer,
        model       : modelReducer
    }
});*/


const reducer = combineReducers({
    site        : siteReducer,
    category    : categoryReducer,
    brand       : brandReducer,
    model       : modelReducer
  })

export default configureStore({
    reducer,
    devTools: true
})