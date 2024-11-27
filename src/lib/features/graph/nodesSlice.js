import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { applyNodeChanges } from '@xyflow/react';
import { nanoid } from '@reduxjs/toolkit';

const nodeAdapter = createEntityAdapter({
    selectId: (node) => {

        return node.id
    }, //por default busca la propiedad .id
    sortComparer: (a, b) => a.id - b.id, // en caso de especificar por alguna propiedad
})

const nodesSlice = createSlice({
    name: "nodes",
    initialState: {
        ...nodeAdapter.getInitialState(),
        canvas: {
            x: 50, y: 50
        }
    },

    reducers: {
        //Logica
        onNodesChange(state, action) {
            nodeAdapter.setAll(state, applyNodeChanges(action.payload, state.ids.map((id) => state.entities[id])));
        },


        onAddNode(state, action) {
            const id = nanoid();
            nodeAdapter.addOne(state, {
                id,
                position: { x: state.canvas.x, y: state.canvas.y },
                data: { label: `Node ${id}` }, // required
                ...action.payload
            });
        },
        onMove(state, action) {
            state.canvas = { ...action.payload };
        },
        onNodeDataChange(state, action) {
            nodeAdapter.setOne(state, {
                ...state.entities[action.payload.id],
                ...action.payload
            })
        }
    }
})
const nodeSelectors = nodeAdapter.getSelectors((state) => state.nodes);
export const selectNodeById = nodeSelectors.selectById;
export const { onNodesChange, onAddNode, onMove, onNodeDataChange } = nodesSlice.actions
export default nodesSlice.reducer