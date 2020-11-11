import { StatusBar } from "expo-status-bar";
import React from "react";
import Store from "./app/store/store";
import Root from "./app/components/root"

export default function App() {
  const store = Store();
  return (
      <Root store={store}></Root>
    );
};

