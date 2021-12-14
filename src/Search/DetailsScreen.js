import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./details.css";
import monster1 from "../../src/assets/monster1.png";
import {API_URL} from "../consts";


const DetailsScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState({Actors: '', Ratings: []});
    const [review, setReview] = useState({});
    const findMovieDetailsByImdbID = () =>
        fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByImdbID, []);

    const createReview = () => {
        fetch(`${API_URL}/reviews`, {
            method: `POST`,
            body: JSON.stringify(review),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(review);
            //.then(status => navigate(`/search/details/${movieDetails.id}`));
    };

    const [user, setUser] = useState({});
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user);
            })
    };
    useEffect(getProfile, [navigate]);

    const [isLiked, setLiked] = useState(null);

    const handleThumb = () => {
        setLiked(!isLiked);
    };


    return (
        <div className="container">
            {/*<h1>Details</h1>*/}
            <div className="card mb-3 border-dark">
                <p className="card-header text-active fs-4">Details</p>
                <div className="row g-0">
                    <div className="col-md-3 d-none d-lg-block">
                        <img src={movieDetails.Poster} className="card-img rounded-start" alt="..."/>
                    </div>
                    <div className="col-9 col-lg-5">
                        <div className="ms-1 card-body">
                            <h2 className="text-warning">{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h2>
                            <p className="card-text">Directed by: {movieDetails.Director}</p>
                            <p className="card-text">{movieDetails.Plot}</p>
                            {/*<p className="card-text"><small className="text-light">Last updated 3 mins ago</small></p>*/}
                            <h3>Cast</h3>
                            <ul>
                                {
                                    movieDetails.Actors.split(',').map(actor =>
                                        <li key={actor}>
                                            {actor}
                                        </li>
                                    )
                                }
                            </ul>
                            <p>Genre: {movieDetails.Genre}</p>
                            {/*<textarea type="text" placeholder="What's your review?" className="form-control"/>*/}
                            <button className="btn btn-primary fs-5">Add to Watchlist</button>
                        </div>

                    </div>
                    <div className="col-3 col-lg-4">

                        <div className="card-body">
                            <h2 className="text-warning">Ratings</h2>

                            {movieDetails.Ratings.map(s =>
                                <h2 className="text fs-5">
                                    {s.Source}: {s.Value}
                                </h2>)
                            }
                            <h2 className="text-light fs-5">SneakPeak: 100%</h2>
                        </div>


                    </div>
                </div>
            </div>
            <div className="card mb-3 border-dark">
                <p className="card-header text-active fs-4">Review</p>
                <div className="row g-0">
                    <div className="col-md-3 ps-1 mb-0">
                        <div className="card-body">
                            <span className="card-text fs-5">Did you like it?</span>
                            <br/>

                            <button onClick={(e) => handleThumb(true)}
                                    className={isLiked ? "mt-1 mb-1 btn btn-success" : "mt-1 mb-1 btn btn-primary"}><i
                                className="far fa-thumbs-up fs-1"></i></button>
                            <br/>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <label for="userReview" className="card-text fs-5">What's your review?</label>
                            <button onClick={createReview} className="btn btn-primary ms-3">Save</button>
                            <textarea onChange={(e) => setReview({...review, username: user.username, poster: movieDetails.Poster, title: movieDetails.Title, imdbID: movieDetails.imdbID, review: e.target.value})} rows="6" id="userReview" type="text" className="mt-2 form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 border-dark mb-5">
                <p className="card-header text-active fs-4">SneakPeak Users</p>
                <div className="row g-0">
                    <ul className="list-group">
                        <div className="list-group-item">
                            <div className="row d-flex">
                                <div className="col-1 d-none d-lg-block">
                                    <div className="ps-1 mt-4 pb-2">
                                        <img src={monster1}
                                             className="img-round" title="" alt=""/>

                                    </div>

                                </div>
                                <div className="col-10 card-body">
                                    <h5 className="text-warning active fs-5"> Movie Title Here</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
                                    <p className="text-white mt-1 mb-0">
                                        - John Smith
                                    </p>

                                </div>
                                <div className="col-1 card-body">
                                    <i className="fas fa-trash"></i>

                                </div>

                            </div>

                        </div>


                    </ul>


                </div>

            </div>
            {/*{JSON.stringify(movieDetails)}*/}

        </div>
    )
};

export default DetailsScreen;