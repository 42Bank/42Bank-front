import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Bank from './pages/Bank';
import Shop from './pages/Shop';
import Events from './pages/Events';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #58B7BA;
    margin: 0;
  }
`

const App = () => (
  <BrowserRouter>
    <div className= "App">
      <GlobalStyle/>
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
