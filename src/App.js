import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <nav className="right">
        <a  className="tab selected">Quotation Details</a>
        <a  className="tab">Other Details</a>
      </nav>

      <div className="main">
        <div className="box">
          <div className="row-1">Row 1</div>
          <div className="row">Row 2</div>
        </div>
        <div className="box">
          <div className="row-1">Quotation Due
</div>
          <div className="row">Row 2</div>
        </div>
        <div className="box">
          <div className="row-1">Project Code
</div>
          <div className="row">Row 2</div>
        </div>
        <div className="box">
          <div className="row-1">Client Name
</div>
          <div className="row">Row 2</div>
        </div>
        <div className="box">
          <div className="row-1">Client Reference Name/Attention To</div>
          <div className="row">Row 2</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;







