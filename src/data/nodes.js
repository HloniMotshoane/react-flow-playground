const initialNodes = [
    {
      id: '1',
      type: 'customNode',
      position: { x: 300, y: 50 },
      data: { label: 'Start' },
    },
    {
      id: '2',
      type: 'customNode',
      position: { x: 300, y: 150 },
      data: { label: 'Fetch Data' },
    },
    {
      id: '3',
      type: 'customNode',
      position: { x: 300, y: 250 },
      data: { label: 'Transform Data' },
    },
    {
      id: '4',
      type: 'customNode',
      position: { x: 300, y: 350 },
      data: { label: 'Validate' },
    },
    {
      id: '5',
      type: 'customNode',
      position: { x: 500, y: 350 },
      data: { label: 'Log Error' },
    },
    {
      id: '6',
      type: 'customNode',
      position: { x: 300, y: 450 },
      data: { label: 'Save to DB' },
    },
    {
      id: '7',
      type: 'customNode',
      position: { x: 300, y: 550 },
      data: { label: 'Send Notification' },
    },
  ];
  export default initialNodes;
  