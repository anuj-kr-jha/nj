import { React, ReactDOM } from './react.mjs';

/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>Hello World</h1>
 *      <h2>Sibling</h2>
 *   </div>
 *  </div>
 *
 * ReactElement(Object) => HTML(Browser understand)
 */

const h1 = React.createElement('h1', {}, 'Hello World');
const h2 = React.createElement('h2', {}, 'Sibling');
const child = React.createElement('div', { id: 'child' }, [h1, h2]); // adding multiple children using array
const parent = React.createElement('div', { id: 'parent' }, child);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);

/*
 this is how nested element looks is creating using rect core feature like React.createElement.
 But this is not how we write react code.
 As we see that we ned to do lot more, and think if we have complex html structure to generate
 how complex it would be to write with this.

 we need to convert this code to JSX, which helps us to write react code in more readable and easy way.
*/
