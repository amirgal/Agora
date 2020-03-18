import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import inventory from './stores/Inventory'

ReactDOM.render(<App store={inventory}/>, document.getElementById('root'));

serviceWorker.unregister();
