import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


const SearchScreen = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || 'batman';
    const [searchTerm, setSearchTerm] = useState(movieTitle)
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
    {
        navigate(`/sneakpeak/search/${searchTerm}`);
        fetch (`http://www.omdbapi.com/?s=${searchTerm}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchTerm(e.target.value);
        }
    };

    const configSaveHandler = (e) => {
        setSearchTerm(e.target.previousElementSibling.value);
    }

    //use useEffect for functions when you first load
    useEffect(findMovies, [searchTerm, navigate]);
    return(
        <div>
            <div className="container">
            <h1>Search Screen</h1>
            <div class="input-group">
                <input type="text"  className="" placeholder="Find a movie..."
                //        onKeyPress={(e) =>
                // handleKeyPress(e.key)} onChange={(e) =>
                //     setSearchTerm(e.target.value)}
                        onKeyPress={(e) =>
                    handleKeyPress(e)}
                />
                <button onClick={(e) =>
                configSaveHandler(e)} type="button" className="btn btn-primary">Search</button>
            </div>
            <div className="row mt-4">

                {movies
                    ? movies.map(movie => (
                        // <li key={movie.imdbID}>
                        //     <Link to={`/sneakpeak/search/details/${movie.imdbID}`}>
                        //     <img alt="Poster" src={movie.Poster} height={125}/>
                        //     {movie.Title}
                        //     </Link>
                        //     <div className="card" >
                        //         <img src={movie.Poster} className="card-img-top" alt="..." />
                        //         <div className="card-body">
                        //             <p className="card-text">{movie.Title}</p>
                        //         </div>
                        //     </div>
                        // </li>


                    <div className="col-md-3 col-4 col-lg-2">
                        <Link className="no-underline" to={`/sneakpeak/search/details/${movie.imdbID}`} >
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
            {JSON.stringify(movies)}
            </div>
        </div>
    )
};

export default SearchScreen;