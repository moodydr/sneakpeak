import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const SearchScreen = () =>{
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
        fetch (`http://www.omdbapi.com/?s=batman&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(movies => setMovies(movies.Search))
    //use useEffect for functions when you first load
    useEffect(findMovies, []);
    return(
        <div>
            <h1>Search Screen</h1>
            <ul>
                {
                    movies.map(movie =>

                        <li key={movie.imdbID}>
                            <Link to={`/details/${movie.imdbID}`}>
                            <img src={movie.Poster} height={125}/>
                            {movie.Title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            {JSON.stringify(movies)}
        </div>
    )
};

export default SearchScreen;