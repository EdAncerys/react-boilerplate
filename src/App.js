import logo from './assets/logo.svg';
import './css/App.css';
import { AppProvider } from './context';

import { FrontPage } from './components/FrontPage';

export const App = () => {
  return (
    <AppProvider>
      <FrontPage />
    </AppProvider>
  );
};
