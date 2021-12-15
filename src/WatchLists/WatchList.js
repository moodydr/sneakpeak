import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";


const WatchList = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const findWatchList = () => {
        fetch(`${API_URL}/watchlists/username/${user.username}`
        ).then(response => response.json()).then(watchlist => setWatchlist(watchlist));
    }


    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/login'));
    }
    useEffect(findWatchList, [watchlist]);
    useEffect(getProfile, [navigate]);
    return (<>

            <div className="container">
                <div className="row mt-4">

                    {watchlist.map((item, index) => (
                        <div className="row mt-4" key={index}>
                            {item.watchlist.map((c, i) => (
                                <div key={i} className="col-md-3 col-4 col-lg-2">
                                    <Link className="no-underline" to={`/search/details/${c.imdbID}`}>
                                        <div className="card border-0">
                                            <img src={c.poster} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text fw-bold">{c.title}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))}
                        </div>
                    ))}


                </div>

            </div>


        </>
    );
}

export default WatchList;



