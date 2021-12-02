import React from "react";
import Profile from "./Profile";
import Navigation from "../Navigation";

const ProfileScreen = () => {
    return ( <>
        <Navigation active={"profile"} />
        <div className="row mt-2">
            <Profile/>
        </div>
    </>)
}

export default ProfileScreen;