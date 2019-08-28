import React, {PureComponent}from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import App from "./App/App"
import './css/reset.css'


/**
 * @desc This is the entry point of the app, it contains the root container.
 * @import App container, redux store, and reset.css
 */
class Root extends PureComponent{
  /**
   * @desc This is the root container, it contains the App container and redux provider and store.
   * @returns App container
   */
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
ReactDOM.render(
    <Root />, 
  document.getElementById('root')
);
