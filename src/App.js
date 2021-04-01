import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import ResumePage from './pages/resume';
import ProjectsPage from './pages/projects'
import ProjectDetails from './components/Projects/ProjectDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={ResumePage} exact />
        <Route path="/projects" component={ProjectsPage} exact />
      </Switch>   
    </Router>
  )


}

export default App;
