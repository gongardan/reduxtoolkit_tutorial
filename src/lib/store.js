import { configureStore } from "@reduxjs/toolkit";
import grapReducer from '@/lib/features/graph/graphSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            graph: grapReducer
        }
    })
}