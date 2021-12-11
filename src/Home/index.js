import React from "react";
import Navigation from "../Navigation";
import ChristmasMovies from "../ChristmasMovies";
import ReviewList from "../ReviewList";



const HomeScreen = () => {


    return (<>

            <div className="container-fluid">
                <div className="row">
                    <Navigation active={"explore"} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
                    <p className="mt-2 ms-3">Placeholder for simple stats component</p>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 mt-2">
                    <ReviewList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-2">
                    <ChristmasMovies/>
                </div>
            </div>

        </>
    );
}

export default HomeScreen;