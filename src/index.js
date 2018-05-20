import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bets from './components/Bets';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bets />, document.getElementById('root'));
registerServiceWorker();