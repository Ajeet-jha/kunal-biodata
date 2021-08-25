import { 
  Suspense, 
  lazy 
} from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const Index = lazy(() => import('./pages/Index'));
const Biodata = lazy(() => import('./pages/Biodata'));
const Family = lazy(() => import('./pages/Family'));
const Stats = lazy(() => import('./pages/Stats'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/family" component={Family} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/biodata" component={Biodata} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
