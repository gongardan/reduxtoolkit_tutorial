import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from '@/lib/features/graph/nodesSlice';
import edgesReducer from '@/lib/features/graph/edgesSlice';
//combinereducers() thunks -> peticiones asincronas o trabajo asincrono con el store
//slice -> rebanada de mi store, pedacito del store
export const makeStore = () => {
    /* eslint-disable no-underscore-dangle */
    return configureStore({
        reducer: {
            nodes: nodesReducer,
            edges: edgesReducer
        },
        devTools: true
    })
    /* eslint-enable */

}