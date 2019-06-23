import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './containers/Header';
import Layout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
}

export default App;
