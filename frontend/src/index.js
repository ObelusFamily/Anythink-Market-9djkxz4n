import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";
import './i18n';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      <I18nextProvider i18n={i18next}>
        <Route path="/" component={App} />
        </I18nextProvider>
      </Switch>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
