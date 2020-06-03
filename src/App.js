import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
