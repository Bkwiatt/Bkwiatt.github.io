import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import ResumePage from './pages/resume';
import ProjectPage from './components/projects'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={ResumePage} exact />
        <Route path="/projectspage" component={ProjectPage} exact />
      </Switch>   
    </Router>
  )


}

export default App;
