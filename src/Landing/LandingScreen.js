import React from "react";
import {Link} from "react-router-dom";
import sneakpeak from "../assets/sneakpeak.png";
import './landing.css';

const LandingScreen = () => {
    return (<>
            <div className="landingContainer">
                <div className="container">
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col"></div>
                        <div className="col-7">

                            <h1 className="h1 text-success text-center text-nowrap mt-3">SneakPeak</h1>
                            <p className="p1 text-light text-center">
                                A Film Forum for Friends
                            </p>


                        </div>

                        <div className="col"></div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}></div>
                        <div className={"col-7 mt-3 text-center"}>

                            <img src={sneakpeak} alt="sneakpeaklogo" className={"resize-logo"} />


                            <Link to="/register" className="signUpButton no-decor">
                                <h3 className={'mt-3 text-light text-center'}>Sign Up!</h3>
                            </Link>

                        </div>
                        <div className={'col'}></div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default LandingScreen;