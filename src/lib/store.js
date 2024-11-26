import { configureStore } from "@reduxjs/toolkit";
import grapReducer from '@/lib/features/graph/graphSlice';
//combinereducers() thunks -> peticiones asincronas o trabajo asincrono con el store
//slice -> rebanada de mi store, pedacito del store
export const makeStore = () => {
    /* eslint-disable no-underscore-dangle */
    return configureStore({
        reducer: {
            graph: grapReducer
        },
        devTools: true
    })
    /* eslint-enable */

}