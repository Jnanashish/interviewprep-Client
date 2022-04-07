import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//import service worker for pwa
import serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App/>, document.getElementById('root')
);

serviceWorker();