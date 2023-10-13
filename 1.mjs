/** @type {(num: 1 |2|3|4|5|6)=>HTMLHeadingElement}*/
const createHeader = (num) => document.createElement(`h${num}`);

const h1 = createHeader(1);
h1.textContent = 'Hello World'; // - innerHTML | innerText | textContent

const root = document.querySelector('#root');
console.log('root', root);
console.log('h1', h1);

root.appendChild(h1);
