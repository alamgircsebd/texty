import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Tools from './pages/Tools';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <Header />

      <div className="wrap texty">
        <div className="texty-container">
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/tools" component={Tools} />
            <Route path="/" exact component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default hot(App);
