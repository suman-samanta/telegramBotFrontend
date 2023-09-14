import { Link } from "react-router-dom"

export default function Menubar() {
    return (
        <>

            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Dashboard</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                         <li>
                         <Link to="/waitinguser">
                                    <i className="bi bi-circle active"></i><span>Waiting User</span>
                                    </Link>
                            </li>
                             <li>
                             <Link to="/subscribedlist">
                                    <i className="bi bi-circle"></i><span>Subscribed User</span>
                                    </Link>
                            </li>
                            
                            
                            
                        </ul>
                    </li>

                

                    

                  

                </ul>

            </aside>
        </>
    )
}