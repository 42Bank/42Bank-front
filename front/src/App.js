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
      <Route exact path="/" component={Login} />
      <Switch>
        <Route path='/auth'
          component={() => {window.location.href = 'https://api.intra.42.fr/oauth/authorize?response_type=code&client_id=0dfca8b2cffc7928d7e207b36879659b90f37e90b90c5e521077ad07ee20a113&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmain&scope=public&state=qUbxGWBoS4Wlr3jqjuNgH4jA5Fyibk';
          return null;
        }} />
        <Route path="/main" component={Home} />
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
