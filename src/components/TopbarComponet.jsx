import React, { useEffect, useRef, useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import './css/Topbar.css'
import { TieredMenu } from 'primereact/tieredmenu';
import Logo from '../assets/images/logo.png'
import UserIcon from '../assets/images/usericon.png'
import { Button } from 'primereact/button';
export default function TopbarComponet({ sidebarVisible }) {
    const menu = useRef(null);
    const username = 'Hi, Aman Singh'
    const date = `${new Date().toDateString()}`
    const items = [

        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {/*Logout logic goes here */ }
        }
    ];
    const [visible, setVisible] = useState(false);
    const handleResize = () => {
        if (window.innerWidth < 992 && !visible) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    };

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
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const handleSidebar = () => {
        setSideMenu(!isSidebarVisible);
    }

    //SideMenu code starts here;
    const [isSideMenuVisible, setSideMenu] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);



    //

    return (
        <div className="topbar">

            <div className="flex align-items-center topbar-logo">
                <div className={`${visible ? 'card flex justify-content-center' : ''}`}>
                    <Button size='large' visible={visible} icon="pi pi-bars fadeindown  animation-duration-100 animation-iteration-1" className='bg-transparent border-none outline-none ml-3 p-0' onClick={handleSidebar} >
                    </Button>
                </div>
                <img src={Logo} alt='logo' className='logo flipleft animation-duration-1000 animation-iteration-1' />
                <strong className='text-gray-100 p-1 text-xs sm:text-xs lg:text-base md:text-sm'>Lead-Arc</strong>
            </div>
            <div className="card flex justify-content-center">
                <Sidebar visible={isSideMenuVisible} onHide={() => setSideMenu(false)}
                    content={({ closeIconRef, hide }) => (
                        <div className="min-h-screen flex relative lg:static">
                            <div id="app-sidebar-2" className="h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none" style={{ width: '320px' }}>
                                <div className="flex flex-column h-full">
                                    <div className="flex align-items-center justify-content-between px-1 pt-3 flex-shrink-0">
                                        <span className="inline-flex align-items-center">

                                            <img src={Logo} alt='logo' className='logo flipleft animation-duration-1000 animation-iteration-1' />

                                        </span>
                                        <span>
                                            <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" outlined className="h-2rem w-2rem border-none text-gray-300"></Button>
                                        </span>
                                    </div>
                                    <div className="overflow-y-auto">
                                        <ul className="list-none px-3 pt-2 m-0">
                                        <Link to='/main/dashboard' className='underline-remove'>
                                            <li>
                                                <div className="p-ripple p-3 flex align-items-center text-600 cursor-pointer">    <i className="pi pi-home mr-2 text-gray-200"></i>
                                                    <span className="font-medium text-300">Dashboard</span>
                                                </div>

                                            </li>
                                            </Link>
                                        </ul>
                                        <ul className="list-none px-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef2} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-user mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Admin</span>
                                                        </div>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <Link to="/main/admin/user" className='underline-remove'>
                                                    <li>
                                                        <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-user-plus text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Users</span>
                                                            <Ripple />
                                                        </div>
                                                    </li>
                                                    </Link>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-language text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Languages</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-building text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Enterprises</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>




                                        <ul className="list-none px-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef3} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-send mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Campaigns</span>
                                                        </div>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-user-plus text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Create</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-language text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">List</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-building text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Condition Fields</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul className="list-none px-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-share-alt mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Data Sources</span>
                                                        </div>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-copy text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Create</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-folder text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">File</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">List</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Stored Procedure</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">API</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                        <ul className="list-none px-3 pt-2 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef5} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-folder mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Content Manager</span>
                                                        </div>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>

                                            </li>
                                        </ul>


                                        <ul className="list-none px-3 pt-2 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef6} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-list mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">List</span>
                                                        </div>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>

                                            </li>
                                        </ul>


                                        <ul className="list-none px-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef7} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-file mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Reports</span>
                                                        </div>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-copy text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Campaign Report</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-folder text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Campaign Leads</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Lead Journey</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>


                                                </ul>
                                            </li>
                                        </ul>

                                        <ul className="list-none px-3 m-0">
                                            <li>
                                                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <div ref={btnRef8} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                        <div>
                                                            <i className="pi pi-share-alt mr-2 text-gray-200"></i>
                                                            <span className="font-medium text-300">Settings</span>
                                                        </div>
                                                        <i className="pi pi-chevron-down"></i>
                                                        <Ripple />
                                                    </div>
                                                </StyleClass>
                                                <ul className="list-none p-0 m-0 overflow-hidden">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-copy text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">General</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-folder text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Time Zones</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Campaign Triggers</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">Campaign Trigger Actions</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className=" flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-list text-gray-200 mr-2"></i>
                                                            <span className="font-medium text-gray-200">DND Manager</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>







                                    </div>
                                    <div className="mt-auto">
                                        <hr className="mb-3 mx-3 border-top-1 border-none text-gray-400 " />
                                        <span className="flex justify-content-end m-3 font-bold text-xs text-gray-400">Copyright Ⓒ  ABJIMA</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                ></Sidebar>
            </div>

            <div className='flex gap-4 align-items-center'>
                <div className='refresh' >
                    <i className='pi pi-refresh text-gray-200 sm:text-sm lg:text-lg md:text-base' tooltip="refresh stats" />
                </div>
                <div>
                    <input type="text" name="text" placeholder="Search..." className='input md:w-8 lg:w-10'></input>
                </div>
                <div className='info'>
                    <strong className='text-100 flex justify-content-end text-xs sm:text-xs lg:text-base md:text-sm'>{username}</strong>
                    <strong className='text-300 text-xs flex justify-content-end'>{date} </strong>
                </div>
                <div className="topbar-usericon">
                    <img src={UserIcon} alt='userIcon' onClick={(e) => menu.current.toggle(e)} />
                </div>

                <div className="card flex justify-content-center">
                    <TieredMenu model={items} popup ref={menu} breakpoint="767px" className='mt-3 p-3' />
                </div>
            </div>
        </div>

    )
}
