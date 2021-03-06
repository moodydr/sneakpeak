import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Navigation from "../Navigation";


const SearchScreen = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || '';
    const [searchTerm, setSearchTerm] = useState(movieTitle)
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
    {
        navigate(`/search/${searchTerm}`);
        fetch (`http://www.omdbapi.com/?s=${searchTerm}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchTerm(e.target.value);
        }
    };

    const configSearchButton = (e) => {
        setSearchTerm(e.target.previousElementSibling.value);
    }

    //use useEffect for functions when you first load
    useEffect(findMovies, [searchTerm, navigate]);
    return(
        <div>
            <Navigation/>
            <div className="container">
            <h1>Search Screen</h1>
            <div className="input-group">
                <input type="text"  className="" placeholder="Find a movie..."
                //        onKeyPress={(e) =>
                // handleKeyPress(e.key)} onChange={(e) =>
                //     setSearchTerm(e.target.value)}
                        onKeyPress={(e) =>
                    handleKeyPress(e)}
                />
                <button onClick={(e) =>
                configSearchButton(e)} type="button" className="btn btn-primary">Search</button>
            </div>
            <div className="row mt-4">

                {movies
                    ? movies.map(movie => (


                    <div className="col-md-3 col-4 col-lg-2">
                        <Link className="no-underline" to={`/search/details/${movie.imdbID}`} >
                            <div className="card border-0" >
                                <img src={movie.Poster} className="card-img-top"  alt="..."/>
                                <div className="card-body">
                                    <p className="card-text fw-bold">{movie.Title}</p>
                                </div>
                            </div>

                        </Link>


                    </div>


                    ))
                    : <div className="container">
                        <p>No results found.</p>

                    </div>
                }
            </div>
            {/*{JSON.stringify(movies)}*/}
            </div>
        </div>
    )
};

export default SearchScreen;