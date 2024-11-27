import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, TextField } from '@mui/material';
import { useAppDispatch } from '@/lib/hooks';
import { onNodeDataChange } from './nodesSlice';
const handleStyle = { left: 10 };

function TextNode({ data, id }) {
    const dispatch = useAppDispatch();
    const onChange = useCallback((evt) => {
        dispatch(onNodeDataChange({
            id, data: {
                ...data,
                name: evt.target.value
            }
        }))
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <Card sx={{ minWidth: 275 }} variant='outlined'>
                <CardContent>
                    <TextField fullWidth name='name' label={`Nombre del nodo ${id}`} value={data.name ?? ""} onChange={onChange} />
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={handleStyle}
            />
        </>
    );
}

export default TextNode;