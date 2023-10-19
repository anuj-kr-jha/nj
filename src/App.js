import './styles/app.css';
import BodyComponent from './components/body.js';
import FooterComponent from './components/footer.js';
import HeaderComponent from './components/header.js';

const AppComponent = () => (
  <div className="app__container">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);

export default AppComponent;
