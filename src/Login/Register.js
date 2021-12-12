import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../consts";
import Navigation from "../Navigation";
import PrivacyPolicy from "../PrivacyPolicy";


const Register = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const register = () => {
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(status => navigate('/sneakpeak/profile'));
    };
    return (<>
            <Navigation active={'home'}/>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-4 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <Link className="" to={`/register/privacy`} ><button type="" className="btn btn-outline-light btn-md mt-3 mb-3">
                                        Review Privacy Policy
                                    </button></Link>

                                    <p className="text-white-50 mb-3">Please enter a username and password to create your account!</p>

                                    <div className="form-outline form-white mb-3">
                                        <input type="email" id="typeEmailX"
                                               className="form-control form-control-lg"
                                               value={user.username}
                                               onChange={(e) => setUser({...user, username: e.target.value})}/>
                                        <label className="form-label" htmlFor="typeEmailX">Username</label>
                                    </div>

                                    <div className="form-outline form-white mb-3">
                                        <input type="password" id="typePasswordX"
                                               className="form-control form-control-lg"
                                               value={user.password}
                                               onChange={(e) => setUser({...user, password: e.target.value})}/>
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>

                                    <button className="btn btn-outline-light btn-md px-5 mt-2"
                                            onClick={register}>Register</button>


                                    {/*<div className="d-flex justify-content-center text-center mt-4 pt-1">*/}
                                    {/*    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>*/}
                                    {/*    <a href="#!" className="text-white"><i*/}
                                    {/*        className="fab fa-twitter fa-lg mx-4 px-2"></i></a>*/}
                                    {/*    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>*/}
                                    {/*</div>*/}

                                </div>

                                <div>
                                    <span className="mb-0 mt-0">Already have an account? <Link to="/sneakpeak/login"
                                                                                  className="text-white-50 fw-bold">Login</Link></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;