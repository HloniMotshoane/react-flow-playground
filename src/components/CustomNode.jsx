import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function CustomNode({ data }) {
  return (
    <div
      style={{
        background: 'white',
        padding: '8px',
        borderRadius: '6px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        border: '1px solid #ccc',
        minWidth: '100px',
        textAlign: 'center',
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
