import { React, ReactDOM } from './react.mjs';

// - creating element is core of react so done by React itself
const heading = React.createElement('h1', { id: 'heading', xyz: 'abc' }, 'Hello World from react'); // <Tag, Obj, Value>

// - render element to DOM is done by ReactDOM
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(heading);
