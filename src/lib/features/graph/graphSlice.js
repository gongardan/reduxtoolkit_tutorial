import { createSlice } from "@reduxjs/toolkit";
import { applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { act } from "react";

const grapSlice = createSlice({
    name: "graph",
    initialState: {
        nodes: [
            {
                id: '1', // required
                position: { x: 0, y: 0 }, // required
                data: { label: 'Hello' }, // required
            },
            {
                id: '2', // required
                position: { x: 50, y: 50 }, // required
                data: { label: 'Node 2' }, // required
            },
        ],
        edges: [{ id: '1-2', source: '1', target: '2' }]
    },
    reducers: {

        onEdgesChange(state, action) {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        onNodesChange(state, action) {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        }

    }
})
export const { onNodesChange, onEdgesChange } = grapSlice.actions
export default grapSlice.reducer