// App.js - Main component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import APIInfrastructureHealth from './components/APIInfrastructureHealth';
import APIMasterListView from './components/APIMasterListView';
import DetailedAPIView from './components/DetailedAPIView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/api-infrastructure-health" component={APIInfrastructureHealth} />
          <Route path="/api-master-list" component={APIMasterListView} />
          <Route path="/api/:id" component={DetailedAPIView} />
        </Switch>
        {/* Footer component can be added here */}
      </div>
    </Router>
  );
}

export default App;
