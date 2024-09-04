import React, {useEffect, useState } from 'react'
import '../components/css/Sidebar.css'
import { Link } from 'react-router-dom';
const SidebarComponent = ({ onPinChange }) => {
    const commonClassesForMenuItems = 'sidebar-item list-none flex gap-3 ml-5 align-items-center cursor-pointer select-none flipup animation-duration-500 animation-iteration-1'
    const [visible, setVisible] = useState(false);
    const [isChecked, setButtonState] = useState(false);
    const [pinned, setPinned] = useState(false);
    const handleMouseEnter = () => {
        if (!pinned) {
            setVisible(true);
        }
    };
    const handleMouseLeave = () => {
        if (!pinned) {
            setVisible(false);
        }
    };
    const handleMouseOver = () => {
        if (!pinned) {
            setVisible(true)
        }
    };
    const handleResize = () => {
        if (window.innerWidth < 992 && !pinned) {
          setVisible(false);
          setPinned(pinned);
          setButtonState(false);
        }
      };

      
  
    
    const handlePinClick = () => {
       
        const newPinnedState = !pinned;
        setPinned(newPinnedState);
        setButtonState(newPinnedState);
        onPinChange(newPinnedState); //Used for Notify parent about the change
    };
    const handleToggleBtnVisiblity= () => {
        setVisible(false);
    }
    
    // const menuBtnClicked = () => {
    //     visible != true ? setVisible(true) : setVisible(false)
    // };

    const [isAdminSubmenuVisible, setIsAdminSubmenuVisible] = useState(false);
    const [isCampaignsSubmenuVisible, setIsCampaignsSubmenuVisible] = useState(false);
    const toggleAdminSubmenu = () => setIsAdminSubmenuVisible(!isAdminSubmenuVisible);
    const toggleCampaignsSubmenu = () => setIsCampaignsSubmenuVisible(!isCampaignsSubmenuVisible);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      useEffect(() => {
        handleResize();
      }, []);
    
    return (
        <div className=''>
            <div className={`sidebar ${visible ? 'expanded' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
                <div className='w-full h-2rem'>
                    <div className='flex justify-content-end mx-5'>
                        <label className={`switch toggle-btn ${visible ? '' : 'hide'}`}>
                            <input type="checkbox" className="checkbox" onClick={handlePinClick} onChange={handlePinClick} checked={isChecked}/>
                            <div className={`slider ${visible ? '' : 'hide'}`}></div>
                        </label>
                    </div>
                </div>
                <ul className='flex flex-column gap-5 mt-0'>
                    <Link to='/main/dashboard' className='underline-remove'>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-home text-gray-200"></i>
                        <strong className='text-xs text-300'>Dashboard</strong>
                    </li></Link>

                    <li className={commonClassesForMenuItems} onClick={toggleAdminSubmenu}>
                        <div className='flex align-items-center gap-5'>
                            <div className='flex align-items-center gap-3'>
                                <i className="text-xl pi pi-user text-gray-200"></i>
                                <strong className='text-xs text-300'>Admin </strong>
                            </div>
                            <div className='flex align-items-center gap-5'> <i className='pi pi-angle-down text-300 sub-icon' />

                            </div>
                        </div>


                    </li>
                    {isAdminSubmenuVisible && (

                        <ul className="flex flex-column gap-3">
                            <Link to="/main/admin/user" className='underline-remove'>
                                <li className={commonClassesForMenuItems}>
                                    <i className="text-lg pi pi-user-plus text-gray-200"></i>
                                    <strong className='text-xs text-300'>Users</strong>
                                </li>
                            </Link>
                            <li className={commonClassesForMenuItems}>
                                <i className="text-lg pi pi-language text-gray-200"></i>
                                <strong className='text-xs text-300'>Languages</strong>
                            </li>
                            <li className={commonClassesForMenuItems}>
                                <i className="text-lg pi pi-building text-gray-200"></i>
                                <strong className='text-xs text-300'>Enterprises</strong>
                            </li>
                        </ul>
                    )}
                    <li className={commonClassesForMenuItems} onClick={toggleCampaignsSubmenu}>
                        <i className="text-xl pi pi-send text-gray-200"></i>
                        <strong className='text-xs text-300'>Campaigns </strong>
                        <i className='pi pi-angle-down text-300 sub-icon' />
                    </li>
                    {isCampaignsSubmenuVisible && (
                        <ul className="flex flex-column gap-3">
                            <li className={commonClassesForMenuItems}>
                                <i className="text-lg pi pi-code text-gray-200"></i>
                                <strong className='text-xs text-300'>Create</strong>
                            </li>
                            <li className={commonClassesForMenuItems}>
                                <i className="text-lg pi pi-list text-gray-200"></i>
                                <strong className='text-xs text-300'>List</strong>
                            </li>
                            <li className={commonClassesForMenuItems}>
                                <i className="text-lg pi pi-check-square text-gray-200" ></i>
                                <strong className='text-xs text-300'>Condition Fields</strong>
                            </li>
                        </ul>
                    )}
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-share-alt text-gray-200"></i>
                        <strong className='text-xs text-300'>Data Sources</strong>
                    </li>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-copy text-gray-200"></i>
                        <strong className='text-xs text-300'>Templates</strong>
                    </li>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-folder text-gray-200"></i>
                        <strong className='text-xs text-300'>Content Manager</strong>
                    </li>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-list text-gray-200"></i>
                        <strong className='text-xs text-300'>List</strong>
                    </li>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-file text-gray-200"></i>
                        <strong className='text-xs text-300'>Reports</strong>
                    </li>
                    <li className={commonClassesForMenuItems}>
                        <i className="text-xl pi pi-cog pi-spin animation-iteration-2 text-gray-200"></i>
                        <strong className='text-xs text-300'>Settings</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent
