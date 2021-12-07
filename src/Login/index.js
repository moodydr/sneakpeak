import React from "react";
import Navigation from "../Navigation";
import Login from "./Login";
import Register from "./Register";

const LoginScreen = () => {
    return (<>
            <Navigation active={"explore"} />
            <Login/>
            <Register/>
        </>
    );
}

export default LoginScreen;