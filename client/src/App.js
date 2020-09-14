import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  const headerCss = {
    minHeight: '80px',
    background: 'aquamarine'
  };
  return (
    <Router>
    <div className="App">
      <header className="App-header" style={headerCss}>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib}/>
        <Route path="/otherpage" component={OtherPage}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
