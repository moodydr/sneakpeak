import React from "react";
import Navigation from "../Navigation";
import ChristmasMovies from "../ChristmasMovies";
import ReviewList from "../ReviewList";
import MakeFriends from "../MakeFriends";




const HomeScreen = () => {


    return (<>

            <div className="container-fluid">
                <div className="row">
                    <Navigation active={"home"} />
                </div>
            </div>
            <div className="container-fluid">
            <div className="row mt-5 g-2">
                <div className="col-5 col-md-4 col-xl-3 mt-2">
                    <MakeFriends/>
                </div>
                <div className="col-7 col-md-8 col-xl-6 mt-2">
                    <ReviewList/>

                </div>
                <div className="d-none d-md-none d-xl-block col-xl-3 mt-2">
                    <ChristmasMovies/>
                </div>
            </div>
            </div>

        </>
    );
}

export default HomeScreen;