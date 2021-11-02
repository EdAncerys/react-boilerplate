import './css/App.css';
import { AppProvider } from './context';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { FrontPage } from './components/FrontPage';
import { ComponentOne, ComponentTwo, Home } from './screens/DummyScreens';

export const App = () => {
  // SERVERS ----------------------------
  const ServeNavBar = () => {
    return (
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
          <li>
            <Link to="/page">Front Page</Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <Router>
      <ServeNavBar />
      <Switch>
        <AppProvider>
          <Route path="/about">
            <ComponentOne />
          </Route>
          <Route path="/users">
            <ComponentTwo />
          </Route>
          <Route path="/page">
            <FrontPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </AppProvider>
      </Switch>
    </Router>
  );
};
