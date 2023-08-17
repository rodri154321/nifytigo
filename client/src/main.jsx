import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'  //! After $ npm install @paypal/react-paypal-js
import store  from './Redux/store.js';
import DashboardView from './Views/Dashboard/DashboardView.jsx';

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

let clientID='Ac5Wfk9nx59rszQBbwzRFTkvK2jKMYdfY_Wf4tlMUWutbnLfMa5PH1ZCQpkxx8kZvSCSYgbfdXIqyTTI'   //! ID del usuario 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
{/*     
      <PayPalScriptProvider options={{"client-id":clientID}}>
        <App />
      </PayPalScriptProvider> */}
      <DashboardView/>
    </BrowserRouter>
  </Provider>,

)
