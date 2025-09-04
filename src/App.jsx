import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="header">Header</div>
        
        <div className="container2">
          <div className="left-side">
            <div className="hero">Hero</div>
            <div className="sidebar">Sidebar</div>
          </div>
          
          <div className="right-side">
            <div className="main">Main Content</div>
            <div className="extra">Extra Content</div>
          </div>
        </div>
        
        <div className="content2">
          <div className="ri">Related Images</div>
          <div className="rp">Related Posts</div>
        </div>
        
        <div className="footer">Footer</div>
      </div>
    </>
  );
}

export default App;