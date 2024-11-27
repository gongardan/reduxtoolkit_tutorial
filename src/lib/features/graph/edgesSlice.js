import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges } from '@xyflow/react';
import { useAppSelector } from "@/lib/hooks";

// actividad: modificar el slice de edges para que funcione con un entity adapnter
const edgeAdapter = createEntityAdapter({
    selectId: (edge) => {
        return edge.id
    }, //por default busca la propiedad .id
});

const edgesSlice = createSlice({
    name: "edges",
    initialState: edgeAdapter.getInitialState(),

    reducers: {
        //Logica
        onEdgesChange(state, action) {
            edgeAdapter.setAll(state, applyEdgeChanges(action.payload, state.ids.map(id => state.entities[id])))
        },

        onConnect(state, action) {
            const currentEdges = state.ids.map(id => state.entities[id]);
            const edges = addEdge(action.payload, currentEdges);
            edgeAdapter.setAll(state, edges);
        },

        onAddEdge(state, action) {
            edgeAdapter.addOne(state, action.payload)
        },
    }
})
export const { selectAll } = edgeAdapter.getSelectors((state) => state.edges);
export const { onEdgesChange, onConnect, onAddEdge } = edgesSlice.actions
export const useEdges = () => useAppSelector(selectAll);
export default edgesSlice.reducer