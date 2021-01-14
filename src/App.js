import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppContextProvider from './contexts/AppContext';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Home from './containers/Home';
import SignIn from 'containers/SignIn';
import History from 'containers/History';


function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/history" component={History} />
          </Switch>
        </main>
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
