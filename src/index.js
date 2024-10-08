import React,  { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import SuspenseContent from './containers/SuspenseContent';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Monitoringpage from './monitoringpage';


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
     <Suspense fallback={<SuspenseContent />}>
     <ToastContainer />
         <Provider store={store}>
             <App />
         </Provider>
      </Suspense>
    
   // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
