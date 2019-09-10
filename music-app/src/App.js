import React from 'react';
import Index from './Components/layout/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import {Provider} from './context'

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
