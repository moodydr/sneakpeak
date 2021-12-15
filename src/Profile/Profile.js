import './profile.css';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {API_URL} from "../consts";
import Navigation from "../Navigation";
import ReviewList from "../ReviewList";
import userService from "../services/userService";


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


        const cancelClickListener = () => {

                console.log("test");
                setUser({...user});
        }

        const saveClickHandler = (user) => {
                const newUser = {firstName: user.firstName, lastName: user.lastName, avatar: user.avatar, email: user.email, website: user.website};
                userService.updateUser(user).then(user => setUser(newUser));
        }

        const logout = () => {
                fetch(`${API_URL}/logout`, {
                        method: 'POST',
                        credentials: 'include'
                }).then(res => navigate('/'));
        }
        useEffect(getProfile, [navigate]);




    // we show the page if the user is logged in and redirect to the login page if not. this component uses conditional rendering and array mapping to generate the cards.
    //if (props.user && props.user._id) {
        return (<>
                    <Navigation active={"explore"} className="mt-0"/>
            <div className="container">
                    <div className="row gutters"><h1 className="fs-1 mb-1 mt-5"></h1></div>
                    <div className="row gutters mt-2">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="card h-100 border-primary">
                                            <div className="card-body mt-2">
                                                    <div className="account-settings">
                                                            <div className="user-profile">

                                                                    <div className="user-avatar">
                                                                            <img className="img-fluid "
                                                                             src={user.avatar}
                                                                                alt="avatar"/>
                                                                    </div>
                                                                    <p className="user-name text-white mb-0 fw-bold fs-4">{user.username}</p>
                                                                    <span className="user-email fs-6 mt-0 fw-bold">{user.email}</span>
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
                                                                            <label htmlFor="firstName">First Name</label>
                                                                            <input type="text"
                                                                                   className="form-control"
                                                                                   id="firstName"
                                                                                   defaultValue={user.firstName}
                                                                                   placeholder="Enter first name"
                                                                                   onChange={(e) => setUser({...user, firstName: e.target.value})}
                                                                                   />
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="lastName">Last Name</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="lastName"
                                                                                   placeholder="Enter last name"
                                                                                   defaultValue={user.lastName}
                                                                                   onChange={(e) => setUser({...user, lastName: e.target.value})}
                                                                                   />
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="phone">Email</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="email"
                                                                                   defaultValue={user.email}
                                                                                   onChange={(e) => setUser({...user, email: e.target.value})}
                                                                                   placeholder="Enter email"/>
                                                                    </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                    <div className="form-group">
                                                                            <label htmlFor="website">Website</label>
                                                                            <input type="url" className="form-control"
                                                                                   id="website"
                                                                                   defaultValue={user.website}
                                                                                   onChange={(e) => setUser({...user, website: e.target.value})}
                                                                                   placeholder="Website url"/>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    <div className="row gutters">
                                                            <div
                                                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                    <div className="text-right mt-4 mb-0">
                                                                            <button type="button" id="submit"
                                                                                    name="submit"
                                                                                    onClick={cancelClickListener}
                                                                                    className="btn btn-primary">Cancel
                                                                            </button>
                                                                            <button type="button" id="submit"
                                                                                    name="submit"
                                                                                    onClick={() => saveClickHandler(user)}
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
                    <div className="row g-0">
                            <div className="">
                                    <ReviewList/>
                            </div>


                    </div>
            </div></>
        );

};

export default Profile;