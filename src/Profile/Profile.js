import './profile.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {API_URL} from "../consts";
import Navigation from "../Navigation";




const Profile = function (props) {
        const [user, setUser] = useState({});
        const navigate = useNavigate();
        const getProfile = () => {
                fetch(`${API_URL}/profile`, {
                        method: 'POST',
                        credentials: 'include'
                }).then(res => res.json())
                    .then(user => {
                            setUser(user);
                    }).catch(e => navigate('/login'));
        }
        const logout = () => {
                fetch(`${API_URL}/logout`, {
                        method: 'POST',
                        credentials: 'include'
                }).then(res => navigate('/sneakpeak'));
        }
        useEffect(getProfile, [navigate]);

    // we show the page if the user is logged in and redirect to the login page if not. this component uses conditional rendering and array mapping to generate the cards.
    //if (props.user && props.user._id) {
        return (<><Navigation active={"explore"} />
            <div className="container">
                    <div className="row gutters"><h1 className="fs-1 mb-1">Profile</h1></div>
                    <div className="row gutters mt-2">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 border-primary">
                                            <div className="mt-5 card-body">
                                                    <div className="account-settings">
                                                            <div className="user-profile">

                                                                    <div className="user-avatar">
                                                                            <img className="img-fluid mt-4"
                                                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                                alt="Maxwell Admin"/>
                                                                    </div>
                                                                    <p className="user-name text-white mb-0 fw-bold fs-4">{user.username}</p>
                                                                    <p className="user-email fs-6 mt-0 fw-bold">{user.email}</p>
                                                                    </div>
                                                    </div>


                                            </div>
                                    </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 border-primary">
                                            <div className="card-body">
                                                    <div className="row gutters">
                                                            <div
                                                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <h6 className="mb-3 ">Personal
                                                                            Details</h6>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="fullName">Full Name</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="fullName"
                                                                                   placeholder="Enter full name"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="eMail">Email</label>
                                                                            <input type="email" className="form-control"
                                                                                   id="eMail"
                                                                                   placeholder="Enter email ID"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="phone">Phone</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="phone"
                                                                                   placeholder="Enter phone number"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="website">Website URL</label>
                                                                            <input type="url" className="form-control"
                                                                                   id="website"
                                                                                   placeholder="Website url"/>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    <div className="row gutters">
                                                            <div
                                                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <h6 className="mb-1 mt-2">Address</h6>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="Street">Street</label>
                                                                            <input type="name" className="form-control"
                                                                                   id="Street"
                                                                                   placeholder="Enter Street"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="ciTy">City</label>
                                                                            <input type="name" className="form-control"
                                                                                   id="ciTy" placeholder="Enter City"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="sTate">State</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="sTate" placeholder="Enter State"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="zIp">Zip Code</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="zIp" placeholder="Zip Code"/>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    <div className="row gutters">
                                                            <div
                                                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <div className="text-right mt-4 mb-0">
                                                                            <button type="button" id="submit"
                                                                                    name="submit"
                                                                                    className="btn btn-primary">Cancel
                                                                            </button>
                                                                            <button type="button" id="submit"
                                                                                    name="submit"
                                                                                    className="ms-3 btn btn-primary">Update
                                                                            </button>
                                                                            <button type="button"
                                                                                onClick={logout}
                                                                                className="ms-3 btn btn-danger">
                                                                                    Logout
                                                                            </button>
                                                                    </div>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div></>
        );

};

export default Profile;