import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { nanoid } from '@reduxjs/toolkit';


const grapSlice = createSlice({
    name: "graph",
    initialState: {
        //datos
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
            }
        ],
        edges: [{ id: '1-2', source: '1', target: '2' }],
        canvas: {
            x: 0,
            y: 0,
            zoom: 1
        }
    },
    reducers: {
        //Logica
        onEdgesChange(state, action) {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        onNodesChange(state, action) {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },

        onConnect(state, action) {
            state.edges = addEdge(action.payload, state.edges)
        },

        onAddNode(state, action) {
            const id = nanoid();
            state.nodes = [...state.nodes, {
                id,
                position: { x: state.canvas.x, y: state.canvas.y },
                data: { label: `Node ${id}` }, // required
                ...action.payload
            }];
        },

        onAddEdge(state, action) {
            state.edges = [...state.edges, action.payload];
        },
        onMove(state, action) {
            state.canvas = { ...action.payload };
        },

        onNodeDataChange(state, action) {
            state.nodes = state.nodes.map(node => {
                if (node.id == action.payload.id) {
                    node.data = { ...action.payload.data }
                }
                return node;
            })
        }


    }
})

export const { onNodesChange, onEdgesChange, onConnect, onAddEdge, onAddNode, onMove, onNodeDataChange } = grapSlice.actions
export default grapSlice.reducer