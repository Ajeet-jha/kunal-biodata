import React, { 
  Suspense, 
  lazy 
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

// const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Biodata = lazy(() => import('./pages/Biodata'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/biodata" component={Biodata} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
