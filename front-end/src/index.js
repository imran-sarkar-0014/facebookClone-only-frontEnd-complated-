import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import store from './store/store'

const AppRender = () => {
  return <App />
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRender />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
