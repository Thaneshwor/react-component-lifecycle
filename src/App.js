import React from 'react';
import Lifecycle from './components/lifecycle/Mount';
import './App.css';
import Update from './components/lifecycle/Update';
import Container from './components/lifecycle/Container';

function App() {
  return (
    <div className="App">
      {/* <Lifecycle favcol='blue' /> */}
      <Update favcol='pink' />
      <Container />
    </div>
  );
}

export default App;
