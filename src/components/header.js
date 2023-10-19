import appLogo from '../../public/app-logo.png';
const HeaderComponent = () => (
  <div className="header">
    <div className="header__logo-container">
      <img src={appLogo} alt="logo" className="logo" />
    </div>
    <div className="header__nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default HeaderComponent;
