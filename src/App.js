import React from 'react';

const h1 = React.createElement('h1', {}, 'Hello World');
const h2 = React.createElement('h2', {}, 'Sibling');
const child = React.createElement('div', { id: 'child' }, [h1, h2]); // adding multiple children using array
const parent = React.createElement('div', { id: 'parent' }, child);
export default parent;
