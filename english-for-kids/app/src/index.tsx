import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './normalize.css';
import AppContainer from './Components/AppContainer';
import store from './Redux/ReduxStore';

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
