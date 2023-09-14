import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import baseUrl from "../config/default";

export default function Header(props) {


    const [user, setUser] = useState(false);

  useEffect(() => {
    const getUser = () => {
      fetch(`${baseUrl}/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((resObject) => {
         setUser(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

 
  const navigate = useNavigate();

const signOut=()=>{
        window.open("http://localhost:5000/server/auth/logout", "_self");
      
}

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/dashboard">  <a  className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block">Admin Panel</span>
                    </a></Link>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>

                     {user &&<li className="nav-item dropdown pe-3">

<a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
    <span className="d-none d-md-block dropdown-toggle ps-2">{props.userName}</span>
</a>

<ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
    <li className="dropdown-header">
    
    </li>



    <li onClick={()=>signOut()}>
        <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
        </a>
    </li>

</ul>
</li>

   

 } 

 {!user &&
  <li>
                             <Link to="/login">
                                    <i className="bi bi-circle"></i><span>login</span>
                                    </Link>
                            </li>}
 </ul>



                </nav>

            </header>
        </>
    )
}