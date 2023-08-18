import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'  //! After $ npm install @paypal/react-paypal-js
import store  from './Redux/store.js';
import DashboardView from './Views/Dashboard/DashboardView.jsx'; //prueva

let clientID='Ac5Wfk9nx59rszQBbwzRFTkvK2jKMYdfY_Wf4tlMUWutbnLfMa5PH1ZCQpkxx8kZvSCSYgbfdXIqyTTI'   //! ID del usuario 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <PayPalScriptProvider options={{"client-id":clientID}}>
        {/* <App /> */}
        <DashboardView/>
      </PayPalScriptProvider>
    </BrowserRouter>
  </Provider>,

)
