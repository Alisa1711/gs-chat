import React from 'react'
import ReactDOM from 'react-dom';
import HotManager from './HotManager'
import App from './App'

const root = document.querySelector('.gs');

let el = ReactDOM.render(<App/>, root);

//#if _DEBUG
module.hot.accept(() => {
  let App = require(HotManager.getRegistered()).default;
  el = ReactDOM.render(<App/>, root);
});
//#endif
