'use client'
import { useCallback } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import { onNodesChange, onEdgesChange } from './graphSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import '@xyflow/react/dist/style.css'
export default function Graph() {
    const dispatch = useAppDispatch();
    const nodes = useAppSelector(state => {
        return state.graph.nodes
    });
    const edges = useAppSelector(state => {
        return state.graph.edges
    });

    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={(changes) => dispatch(onNodesChange(changes))}
                onEdgesChange={(changes) => dispatch(onEdgesChange(changes))}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div >
    )

}