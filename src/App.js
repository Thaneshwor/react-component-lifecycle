import React from 'react';
import Lifecycle from './components/Lifecycle';
import './App.css';
import LifecycleUpdate from './components/LifecycleUpdate';

function App() {
  return (
    <div className="App">
      {/* <Lifecycle favcol='blue' /> */}
      <LifecycleUpdate favcol='pink' />
    </div>
  );
}

export default App;
