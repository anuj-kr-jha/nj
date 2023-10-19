import React from 'react';
import logo from '../public/react.jpg';
import icon from '../public/user.jpg';
// -------------WITHOUT JSX -------------
const h1 = React.createElement('h1', {}, 'I am H1');
const h2 = React.createElement('h2', {}, 'I am H2');
const h3 = React.createElement('h3', {}, 'I am H3');
const divWithoutJSX = React.createElement('div', { className: 'title' }, [h1, h2, h3]);
// export default divWithoutJSX;

// ------------- WITH JSX -------------
const divWithJSX = (
  <div className="title">
    <h1>I am H1</h1>
    <h2>I am H2</h2>
    <h3>I am H3</h3>
  </div>
);
// export default divWithJSX;

// ------------- COMPONENT -------------
const H1 = () => <h1>I am H1</h1>;
const H2 = () => <h2>I am H2</h2>;
const H3 = () => <h3>I am H3</h3>;

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Logo" />
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
  </div>
);

const UserIcon = () => (
  <div className="user-icon">
    <img src={icon} alt="user icon" />{' '}
  </div>
);

const DivWithJSXAndComponents = () => (
  <div className="title">
    <Logo />
    <SearchBar />
    <UserIcon />
    {/* <H1 /> */}
    {/* <H2> </H2> */}
    {/* {H3()} */}
  </div>
);

export default <DivWithJSXAndComponents />;
