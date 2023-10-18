// import React from 'react';

// const h1 = React.createElement('h1', {}, 'Hello World');
// const h2 = React.createElement('h2', {}, 'Sibling');
// const child = React.createElement('div', { id: 'child' }, [h1, h2]); // adding multiple children using array
// const parent = React.createElement('div', { id: 'parent' }, child);

// JSX 1
// const h1 = <h1>Hello World</h1>;
// const h2 = <h2>Sibling</h2>;
// const child = (
//   <div id="child">
//     {h1}
//     {h2}
//   </div>
// );
// const parent = <div id="parent">{child}</div>;

// JSX 2
const parent = (
  <div id="parent">
    <div id="child">
      <h1>Hello World</h1>
      <h2>Sibling</h2>
    </div>
  </div>
);

export default parent;

/**
 * NOTE: In all the above code, parent is same.
 *  It just differ by the ways we create it.
 *  Jsx is just a syntactic sugar for React.createElement and other React methods.
 *  parent is a React element(object)
 *
 *  we can use variable inside jsx using {<variable>}
 *
 * JSX (transpiled before it reaches the JS engine) - PARCEL-> BABEL/SWC
 *
 * JSX => React.createElement => React element(object) => ReactDOM.render(element) => DOM element(render)
 *
 * https://play.swc.rs/?version=1.3.94-nightly-20231016.1&code=H4sIAAAAAAAAA0vOzysuUShILErNK1GwVdDgUlCwScksU8hMsVWCiCrZAcWQRJMzMnNSoIJA4QxDO4%2FUnJx8hfD8opwUG30gHy5lZBecmZSTmZcOFDaCGqMPNAfEhDI0rQFWA94%2FggAAAA%3D%3D&config=H4sIAAAAAAAAA1WPSw7CMAxE9z1F5DULQIIFd%2BAQUXCrVPkpdiWqqncnzQ%2FYxW9mPM42CAEzKXiILT3TEGQkjH1OhFbH8p0IoLKSVNSB4dTUmQ6J44KZ7EUAlnFCziG6ni%2B3GgDjPWHCozSElVnt9Lj%2BVipvQ0Sif%2BNhlW4yPV8ah9oK1r%2BWLNav8BqwXHCHr6mV9cWg6dmSZe3%2BATEKOQIXAQAA
 *
 * for giving attributes to the jsx element, we have to use camelCase
 *
 * eg: class => className, for => htmlFor, tabindex => tabIndex etc
 * <h1 className="heading" tabIndex="1">Hello</h1>
 *
 * For multiline jsx, we have to wrap it in parenthesis
 */

/**
 * * REACT COMPONENT
 * ? 1. Function based component [new]
 * ? 2. Class based component [old]
 *
 */

/**
 * ? FUNCTION BASED COMPONENT
 * 1. It should be named with PascalCase ( first letter should be capital )
 * 2. It is a normal JS function which returns some React element/ JSX
 *
 * For rendering a component, we have to use root.render(<ComponentName />) instead of root.render(ReactElement)
 *
 */

// const HeadingComponent = () => <h1 className="heading">Hello World</h1>;

// export default <HeadingComponent />;
