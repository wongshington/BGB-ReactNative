import React from "react";
import { HashRouter } from 'react-router-dom';
import App from "./app";
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
        <HashRouter>
          <App></App>
        </HashRouter>
      </Provider>
  )
};

export default Root;
