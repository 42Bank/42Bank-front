import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Bank from './pages/Bank';
import Shop from './pages/Shop';
import Events from './pages/Events';
import {createGlobalStyle} from 'styled-components';

const App = () => (
  <BrowserRouter>
    <div className= "App">
      <Total/>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/bank" component={Bank} />
        <Route path="/shop" component={Shop} />
        <Route path="/events" component={Events} />
      </Switch>
    </div>

  </BrowserRouter>
)

const Total = createGlobalStyle`
  &::-webkit-scrollbar{
    display:none
  }
`
export default App;
