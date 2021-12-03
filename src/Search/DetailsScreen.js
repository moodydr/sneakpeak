import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const DetailsScreen = () => {
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({Actors: ''});
    const findMovieDetailsByImdbID = () =>
        fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(movie => setMovieDetails(movie));
    useEffect(findMovieDetailsByImdbID, []);
    return (
        <div>
            <h1>Details</h1>
            <h2>{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h2>
            Directed by: {movieDetails.Director}
            <br/>
            <img src={movieDetails.Poster} height={100}/>
            <br/>
            <p>
                {movieDetails.Plot}
            </p>
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
            <hr/>
            {JSON.stringify(movieDetails)}
        </div>
    )
};

export default DetailsScreen;