import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./details.css"

const DetailsScreen = () => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({Actors: '', Ratings: []});
    const findMovieDetailsByImdbID = () =>
        fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByImdbID, []);

    const[isLiked, setLiked] = useState(null);
    const[isDisliked, setDisliked] = useState(null);

    const handleThumb = (like) => {
        if (like === true){
            return setLiked(!isLiked) && setDisliked(isDisliked)
        } if (like === false){
            return setDisliked(!isDisliked) && setLiked(isLiked)
        }
        //setLiked(!isLiked);
    };




    return (
        <div className="container">
            {/*<h1>Details</h1>*/}
            <div className="card mb-3 border-dark" >
                <p className="card-header text-active fs-4">Details</p>
                <div className="row g-0">
                    <div className="col-md-3 d-none d-lg-block">
                        <img src={movieDetails.Poster} className="card-img rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-5">
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
                            <button className="btn-primary fs-5">Add to Watchlist</button>
                        </div>

                    </div>
                    <div className="col-md-4">

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
            <div className="card mb-3 border-dark" >
                <p className="card-header text-active fs-4">Review</p>
                <div className="row g-0">
                    <div className="col-md-2 ps-1 mb-0">
                        <div className="card-body">
                            <span className="card-text fs-5">What did you think?</span>
                            <br/>

                            <button onClick={(e) => handleThumb(true)} className={isLiked ? "mt-1 mb-1 btn-success" : "mt-1 mb-1 btn-primary"}><i className="far fa-thumbs-up fs-1"></i></button>
                            <button onClick={(e) => handleThumb(false)} className={isDisliked ? "ms-3 mt-1 mb-1 btn-danger" : "ms-3 mb-1 btn-primary"}><i className="far fa-thumbs-down fs-1"></i></button>
                            <br/>
                        </div>

                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <label for="userReview" className="card-text fs-5">What's your review?</label>
                            <textarea id="userReview" type="text"  className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 border-dark mb-5">
                <p className="card-header text-active fs-4">SneakPeak Users</p>
                <div className="row g-0">
                    <div className="col-md-4 col--6 ps-1">
                        <div className="card-body">
                            <div className="d-flex justify-content-center pb-2">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                     className="img-round" title="" alt="" />

                            </div>
                            <div className="align-center">
                                <p>" Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae. "</p>
                                <h5 className=" mgb-5 fg-text-d fs-130" >Martha Stewart</h5>
                                <small className=" case-u lts-sm fs-80 fg-text-l" >Business
                                    Woman - New York</small>

                            </div>




                        </div>
                    </div>
                    <div className="col-md-4 co-6 ps-1">
                        <div className="card-body">
                            <div className="d-flex justify-content-center pb-2">
                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                     className="img-round" title="" alt="" />

                            </div>
                            <div className="align-center">
                                <p>" Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae. "</p>
                                <h5 className=" mgb-5 fg-text-d fs-130" >Martha Stewart</h5>
                                <small className=" case-u lts-sm fs-80 fg-text-l" >Business
                                    Woman - New York</small>

                            </div>




                        </div>
                    </div>
                    <div className="col-md-4 col-6 ps-1">
                        <div className="card-body">
                            <div className="d-flex justify-content-center pb-2">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                     className="img-round" title="" alt="" />

                            </div>
                            <div className="align-center">
                                <p>" Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae. "</p>
                                <h5 className=" mgb-5 fg-text-d fs-130" >Martha Stewart</h5>
                                <small className=" case-u lts-sm fs-80 fg-text-l" >Business
                                    Woman - New York</small>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
            {/*{JSON.stringify(movieDetails)}*/}
        </div>
    )
};

export default DetailsScreen;