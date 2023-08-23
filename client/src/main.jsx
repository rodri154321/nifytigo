import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'  //! After $ npm install @paypal/react-paypal-js
import store  from './Redux/store.js';

// let clientID='Ac5Wfk9nx59rszQBbwzRFTkvK2jKMYdfY_Wf4tlMUWutbnLfMa5PH1ZCQpkxx8kZvSCSYgbfdXIqyTTI'   //! ID del usuario paypal a recibir
let clientID='AW91nS-D0SWNQZHx7fPnH3paWTYc78_kpzU9sjQQ0VkDCzduQ1XMsKDA7lFT1yCer2P_DpS-RVjK5vQB'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <PayPalScriptProvider options={{"client-id":clientID}}>
        <App /> 
      </PayPalScriptProvider>
    </BrowserRouter>
  </Provider>,

)
