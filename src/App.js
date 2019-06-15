import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 /*  const showHey = true; */

  return (
      <div className="App">
          {/* showHey ? <h1>hey</h1> : null */}
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
      </div>
  );
}

export default App;
