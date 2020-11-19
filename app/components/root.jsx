import React from "react";
import { NativeRouter } from 'react-router-native';
import App from "./app";
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
        <NativeRouter>
          <App></App>
        </NativeRouter>
      </Provider>
  )
};

export default Root;
