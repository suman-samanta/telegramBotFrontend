import Google from "../img/google.png";
import baseUrl from "../config/default";

const urlJoin=require("url-join");

const Login = () => {
  const handleClick = () => {
    window.open(`${baseUrl}/google`, "_self");
  };

 

  return (
    // <div className="login">
    //   <h1 className="loginTitle">Choose a Login Method</h1>
    //   <div className="wrapper">
    //     <div className="left">
    //       <div className="loginButton google" onClick={handleClick}>
    //         <img src={Google} alt="" className="icon" />
    //         Google
    //       </div>
         
    //     </div>
    //     <div className="center">
    //       <div className="line" />
    //       <div className="or">OR</div>
    //     </div>
    //     <div className="right">
    //       <input type="text" placeholder="Username" />
    //       <input type="text" placeholder="Password" />
    //       <button className="submit">Login</button>
    //     </div>
    //   </div>
    // </div>




    <div className="container">

    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                   
                        <div className="d-flex justify-content-center py-4">
                            <a className="logo d-flex align-items-center w-auto">
                                <span className="d-none d-lg-block">Admin Login</span>
                            </a>
                        </div>

                   

                    <div className="card mb-3">

                        <div className="card-body">

                            <div className="pt-4 pb-2">
                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                
                            </div>

                           

                     

                              
                                <div className="col-12">
                                    <button className="btn btn-primary w-100" type="submit" onClick={handleClick}>Login</button>
                                </div>

                     


                        </div>
                    </div>
                   


                </div>
            </div>
        </div>

    </section>

</div>
  );
};

export default Login;
