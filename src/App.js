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

const TitleComponent = () => (
  <h3 className="title" tabIndex="1">
    This is title component
  </h3>
);

const titleElement = (
  <h3 className="title" tabIndex="2">
    This is title element
  </h3>
);

/**
 * * COMPONENT COMPOSITION
 * We can use one or more component inside another component
 */
const HeadingComponent = () => (
  <div class="container">
    <h1 className="heading">This is heading component</h1>
    <TitleComponent />
    {titleElement}
  </div>
);
export default HeadingComponent;

/**
 * All of the following are valid for component:
 *   <TitleComponent />
 *   <TitleComponent></TitleComponent>
 *   {TitleComponent()}
 *
 * All of the following are valid for element:
 *  {titleElement}
 */
