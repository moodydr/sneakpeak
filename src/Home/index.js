import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import ChristmasMovies from "../ChristmasMovies";
import ReviewList from "../ReviewList";
import MakeFriends from "../MakeFriends";
import {API_URL} from "../consts";
import {useNavigate} from "react-router";




const HomeScreen = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user);
                setLoggedIn(!loggedIn);
            }).catch(function(error) {
            console.log(error);
        });
    }

    useEffect(getProfile, []);


    return (<>
            <div className="container-fluid">
                <div className="row">
                    <Navigation active={"home"} />
                </div>
            </div>
            {loggedIn ?
                <div className="container-fluid mt-5">
                    <div className="row mt-4 g-2">
                        <div className="col-5 col-md-4 col-xl-3 mt-2">
                            <MakeFriends/>
                        </div>
                        <div className="col-7 col-md-8 col-xl-6 mt-2">
                            <ReviewList profile={false}/>

                        </div>
                        <div className="d-none d-md-none d-xl-block col-xl-3 mt-2">
                            <ChristmasMovies/>
                        </div>
                    </div>
                </div>
                :
                <div className="container-fluid">
                    <div className="row mt-4 g-2">
                        <div className="col-12 h-25">
                                <ChristmasMovies/>
                        </div>
                    </div>
                </div>
            }


        </>
    );
}

export default HomeScreen;