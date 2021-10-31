import logo from './assets/logo.svg';
import './css/App.css';
import { AppProvider } from './context';

import { FrontPage } from './components/FrontPage';
import { Index } from './screens/index';

export const App = () => {
  return (
    <AppProvider>
      {/* <FrontPage /> */}
      <Index />
    </AppProvider>
  );
};
