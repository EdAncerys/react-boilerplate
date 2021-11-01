import './css/App.css';
import { AppProvider } from './context';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { FrontPage } from './components/FrontPage';
import { ComponentOne, ComponentTwo, Home } from './components/TestComponents';

export const App = () => {
  // SERVERS ----------------------------

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <AppProvider>
          {/* <FrontPage /> */}
          <Route path="/about">
            <ComponentOne />
          </Route>
          <Route path="/users">
            <ComponentTwo />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </AppProvider>
      </Switch>
    </Router>
  );
};
