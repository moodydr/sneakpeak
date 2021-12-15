import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../consts";
import Navigation from "../Navigation";
import monster3 from "../assets/monster3.png";
import monster1 from "../assets/monster1.png";
import monster2 from "../assets/monster2.png";
import monster4 from "../assets/monster4.png";


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
        }).then(status => navigate(`/profile`));
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


                                    <div className="row">
                                        <div className="col-6">
                                            <input type="radio" className="form-check-input" name="optionsRadios"
                                                   id="optionsRadios1" value="option1" checked=""
                                                   onChange={(e) => setUser({...user, avatar: monster1})}/>
                                            <img src={monster1} className=" w-50 " />
                                        </div>
                                        <div className="col-6">
                                            <input type="radio" className="form-check-input" name="optionsRadios"
                                                   id="optionsRadios1" value="option2" checked=""
                                                   onChange={(e) => setUser({...user, avatar: monster2})}/>
                                            <img src={monster2} className=" w-50 " />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <input type="radio" className="form-check-input" name="optionsRadios"
                                                   id="optionsRadios1" value="option3" checked=""
                                                   onChange={(e) => setUser({...user, avatar: monster3})}/>
                                            <img src={monster3} className=" w-50 h-75 " />
                                        </div>
                                        <div className="col-6">
                                            <input type="radio" className="form-check-input" name="optionsRadios"
                                                   id="optionsRadios1" value="option4" checked=""
                                                   onChange={(e) => setUser({...user, avatar: monster4})}/>
                                            <img src={monster4} className=" w-50 " />
                                        </div>
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
                                    <span className="mb-0 mt-0">Already have an account? <Link to="/login"
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