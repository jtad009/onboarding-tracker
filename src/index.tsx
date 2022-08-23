import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import './assets/main.css';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";



const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Unknown root element");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>

  {/* // <StrictMode> */}
    <App />
  {/* // </StrictMode> */}
  </Provider>
);
