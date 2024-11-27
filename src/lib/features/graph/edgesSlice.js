import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges } from '@xyflow/react';

const edgesSlice = createSlice({
    name: "edges",
    initialState: [],

    reducers: {
        //Logica
        onEdgesChange(state, action) {
            state = applyEdgeChanges(action.payload, state);
        },

        onConnect(state, action) {
            return [...addEdge(action.payload, state)]
        },

        onAddEdge(state, action) {
            state = [...state, action.payload];
        },
    }
})

export const { onEdgesChange, onConnect, onAddEdge } = edgesSlice.actions
export default edgesSlice.reducer