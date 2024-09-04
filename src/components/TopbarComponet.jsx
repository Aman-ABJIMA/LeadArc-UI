import React, { useRef, useState } from 'react'
import './css/Topbar.css'
import { TieredMenu } from 'primereact/tieredmenu';
import Logo from '../assets/images/logo.png'
import UserIcon from '../assets/images/usericon.png'
export default function TopbarComponet() {
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

    
    return (
        <div className="topbar">
            
            <div className="flex align-items-center topbar-logo">
            {/* <div className={`${visible ? 'card flex justify-content-center' : ''}`}>
                <Button visible={visible} icon="pi pi-bars" className='bg-transparent border-none ml-3 p-0' onClick={() => setVisible(true)} >
                   <SidebarComponent visible={visible} onHide={() => setVisible(false)}></SidebarComponent>
                </Button>
            </div> */}
                <img src={Logo} alt='logo' className='logo flipleft animation-duration-1000 animation-iteration-1' />
                <strong className='text-gray-100 p-1 text-xs sm:text-xs lg:text-base md:text-sm'>Lead-Arc</strong>
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
