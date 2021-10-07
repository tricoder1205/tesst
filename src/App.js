import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import SignIn from 'components/SignIn/index';
import Header from 'components/Header/index';
import SignUp from 'components/SignUp';



function App() {
  const Home = React.lazy(() => { import('./features/Home') })

  return (
    <div className="App">
      <Suspense fallback={<div>Loading......</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/" />

            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/cart" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
