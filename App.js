import React from 'react';
import { Provider } from 'react-redux';
import store from './appData/config/store';
import NavigationView from './appData/views/navigationContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider
        store={store}
      >
        <NavigationView />
      </Provider>
    );
  }
}
