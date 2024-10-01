import routes from '../routes/sidebar'
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { useDispatch } from 'react-redux';

function LeftSidebar() {
    const location = useLocation();

    const dispatch = useDispatch()


    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }
    //   px-[20px]
    return (
        <div className="drawer-side  z-30 ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu px-[20px] pr-[40px] py-[26px]  lg:w-[252px] w-[300px] bg-base-100 min-h-full   text-base-content">
                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button>

                <li className="mb-[70px] font-semibold text-xl">

                    <Link className='lg:justify-center lg:px-0 px-4 site-logo p-0' to={'/seeker/dashboard'}><span className="rounded-[10px] w-10 bg-primary h-10"></span>Qruil</Link> </li>
                {
                    routes.map((route, k) => {
                        return (
                            <li className="menu-link bg-[#FFFFFF]" key={k}>
                          
                                {
                                    
                                    route.submenu ?
                                        // <SidebarSubmenu {...route} /> 
                                        ''
                                        :
                                        (<NavLink
                                            end
                                            to={route.path}
                                            className={({ isActive }) => ` ${isActive ? 'bg-[#FFCB05] focus:border-[] focus:bg-[#FFCB05]  rounded-[12px] sidebar-button-p-m   ' : ' sidebar-button-p-m font-normal hover:bg-[#FFF7EA]'}`} >
                                            <span className={` h-[100%] rounded-[10px] ${location.pathname === route.path ? 'bg-[black] text-[#FFCB05] sidebar-button-icon-p-m' : 'bg-[#FFCB05] text-[black] sidebar-button-icon-p-m'}`} >
                                                {route.icon}
                                            </span>
                                            {/* ${location.pathname === route.path ? '' : '' */}
                                            <span className={` se font-semibold ${location.pathname === route.path ? 'text-[black]':'text-[black]' }`}>
                                            {route.name}
                                            </span>
                                            {/* {
                                            location.pathname == route.path ? (<span className="absolute mt-1 mb-1 inset-y-0 left-0 w-[2px] rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                    } */}
                                        </NavLink>)
                                }

                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default LeftSidebar