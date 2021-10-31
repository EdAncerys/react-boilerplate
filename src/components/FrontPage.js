import { useEffect } from 'react';
import logo from '../assets/logo.svg';

import { useAppDispatch, useAppState, loading } from '../context';

export const FrontPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppState();

  useEffect(() => {
    console.log(`loading value ${isLoading}`);
  }, [isLoading]);

  useEffect(() => {
    loading({ dispatch, isLoading: true });
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>React App!</div>
    </div>
  );
};
