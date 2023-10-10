import React from 'react';
import './App.css';
import Router from './Pages/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
        <ToastContainer position="bottom-right" autoClose={7000} />
      </div>
    </QueryClientProvider>
  );
}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppWithStore;
