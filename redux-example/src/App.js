import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import Posts from './components/Post'
import Postform from './components/Postform'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
