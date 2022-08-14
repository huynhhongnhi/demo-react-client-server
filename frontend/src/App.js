import './App.css';

import LayoutCommon from "./Components/Layout/LayoutCommon";

import "./assets/fontawesome/css/all.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/templatemo-video-catalog.css";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <LayoutCommon></LayoutCommon>
    </BrowserRouter>
  );
}

export default App;
