import './App.css';
import React, { useEffect, useState } from 'react';
import 'primereact/resources/themes/nano/theme.css'
import 'primeicons/primeicons.css'; // Icons
import TopbarComponet from './components/TopbarComponet';
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';
import Routing from './config/Routing';
import FooterComponent from './components/FooterComponent';

function App() {
  const handleResize = () => {
    if ( window.innerWidth < 992 ) {
      SidebarPinned(false);
    } 
  };
  const [isSidebarPinned, SidebarPinned] = useState(false);
  const handlePinChange = (pinned) => {
    SidebarPinned(pinned);
    
    
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div>
      <TopbarComponet />
      <SidebarComponent onPinChange={handlePinChange}/>
      <div className={`main ${isSidebarPinned ? 'component-compress' : 'component-not-compress'}`}>
      <Routing>    
        <MainComponent />
      </Routing>
      <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
