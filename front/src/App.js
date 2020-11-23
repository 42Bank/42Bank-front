import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Bank from './pages/Bank';
import Shop from './pages/Shop';
import Events from './pages/Events';

const App = () => (
  <BrowserRouter>
    <div className= "App">
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/bank" component={Bank} />
        <Route path="/shop" component={Shop} />
        <Route path="/events" component={Events} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
