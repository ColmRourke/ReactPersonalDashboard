import React from 'react';
import Index from './Components/layout/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import {Provider} from './context'
import Lyrics from './Components/tracks/Lyrics'

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/lyric/track/:id' component={Lyrics} />
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
