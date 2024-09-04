import React, { useState } from 'react'
import DashboardComponent from './dashboard/DashboardComponent'
import '../components/css/Main.css'
import FooterComponent from './FooterComponent';


const MainComponent = () => {
    const [isSidebarPinned, setIsSidebarPinned] = useState(false);
    const handlePinChange = (pinned) => {
        setIsSidebarPinned(pinned);
        console.warn(isSidebarPinned);
    }
    return (     
           <div>
               <DashboardComponent />
           </div>
    )
}

export default MainComponent
