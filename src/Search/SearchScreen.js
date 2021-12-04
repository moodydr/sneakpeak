import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


const SearchScreen = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || 'batman'
    const [searchTerm, setSearchTerm] = useState(movieTitle)
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
    {
        navigate(`/sneakpeak/search/${searchTerm}`);
        fetch (`http://www.omdbapi.com/?s=${searchTerm}&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    }
    //use useEffect for functions when you first load
    useEffect(findMovies, []);
    return(
        <div>
            <div className="container">
            <h1>Search Screen</h1>
            <div class="input-group">
                <input type="text"  className="" placeholder="Find a movie..." onChange={(e) =>
                    setSearchTerm(e.target.value)} />
                <button onClick={findMovies} type="button" className="btn btn-primary">Search</button>
            </div>
            <div className="row mt-4">

                {
                    movies.map(movie =>
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


                    <div className="col-sm-2">
                        <Link to={`/sneakpeak/search/details/${movie.imdbID}`} >
                            <div className="card" >
                                <img src={movie.Poster} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">{movie.Title}</p>
                                </div>
                            </div>

                        </Link>


                    </div>




                    )
                }
            </div>
            {JSON.stringify(movies)}
            </div>
        </div>
    )
};

export default SearchScreen;