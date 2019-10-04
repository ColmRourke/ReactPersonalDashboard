import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './store'

import TweetList from './components/TweetList'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <TweetList />
    </div>
    </Provider>
  );
}

export default App;
