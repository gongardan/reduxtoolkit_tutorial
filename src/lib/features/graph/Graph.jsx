'use client'
import { ReactFlow, Background, Controls, Panel } from '@xyflow/react';
import { onNodesChange, onAddNode, onMove, selectAl,useNodes } from './nodesSlice';
import { onEdgesChange, onConnect, onAddEdge, useEdges  } from './edgesSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import '@xyflow/react/dist/style.css'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HdrStrongOutlinedIcon from '@mui/icons-material/HdrStrongOutlined';
import ShareIcon from '@mui/icons-material/Share';
//import { useDispatch, useSelector, useStore } from "react-redux";
import TextNode from './TextNode';

const nodeTypes = { textNode: TextNode }

export default function Graph() {
    const dispatch = useAppDispatch();
    
    const nodes = useNodes();

    const edges = useEdges();


    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                onMove={(_, position) => { dispatch(onMove(position)) }}
                nodes={nodes}
                edges={edges}
                onNodesChange={(changes) => dispatch(onNodesChange(changes))}
                onEdgesChange={(changes) => dispatch(onEdgesChange(changes))}
                onConnect={(params) => dispatch(onConnect(params))}
                fitView
                nodeTypes={nodeTypes}
            >
                <Background />
                <Panel position='bottom-right'>
                    <SpeedDial
                        ariaLabel="Node options"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >

                        <SpeedDialAction
                            key={"Add simple node"}
                            icon={<HdrStrongOutlinedIcon />}
                            tooltipTitle={"Add simple node"}
                            onClick={(e) => {
                                dispatch(onAddNode({}))
                            }}
                        />
                        <SpeedDialAction
                            key={"Add node With text"}
                            icon={<ShareIcon />}
                            tooltipTitle={"Add node With text"}
                            onClick={(e) => {
                                dispatch(onAddNode({
                                    type: 'textNode'
                                }))
                            }}
                        />

                    </SpeedDial>
                </Panel>
                <Controls />
            </ReactFlow>
        </div >
    )

}

//HOC
