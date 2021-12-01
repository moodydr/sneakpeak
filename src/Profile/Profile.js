import "./profile.css";
import React from "react";
// import { useEffect, useState } from "react";
// import { Redirect } from "react-router";


const Profile = function (props) {

    // we show the page if the user is logged in and redirect to the login page if not. this component uses conditional rendering and array mapping to generate the cards.
    //if (props.user && props.user._id) {
        return (
            <div className="pageContainer">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container mycontainer rounded">
                            <main>
                                    <div className="row">
                                            <p className="h1">Profile</p>
                                            <div className="col-md-4 mt-1">
                                                    <div className="profile-card card">
                                                            <div className="card-body">
                                                                    <div className="d-flex flex-column align-items-center text-center">
                                                                            <img
                                                                                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                                                                alt="profile avatar"
                                                                                width="50%"
                                                                                className="rounded-circle"
                                                                            />
                                                                    </div>
                                                            </div>
                                                    </div>
                                            </div>

                                            <div className="col-md-8 mt-1">
                                                    <div className="profile-card card mb-3 content">
                                                            <p className="m-3 pt-3 h2-font">About</p>
                                                            <div className="card-body">

                                                            </div>
                                                    </div>
                                            </div>
                                            <div className="col-md-12 mt-1">
                                                    <div className="profile-card card content">
                                                            <h3 className="m-3 pt-3">Contacts</h3>
                                                            <div className="card-body">
                                                                    <div className="row">
                                                                            <div className="col-lg-4 ">
                                                                                    <h6>Physician Contacts</h6>

                                                                            </div>

                                                                            <div className="col-md-4">
                                                                                    <h6>Pharmacy Contacts</h6>

                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                    <h6>Emergency Contacts</h6>

                                                                            </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </main>
                            <br />
                            <br />
                    </div>
                    <br />
                    <br />
            </div>
        );
    // } else {
    //     return <Redirect to="/login" />;
    // }
};

export default Profile;