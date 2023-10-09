import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import config from "./Config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
reportWebVitals();