/** @namespace module */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './views/root.jsx';
import '../assets/styles/index.scss';

render(<AppContainer><Root/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./views/root.jsx', () => {
    const RootHotReload = require('./views/root.jsx').default;
    render(
      <AppContainer>
        <RootHotReload/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
