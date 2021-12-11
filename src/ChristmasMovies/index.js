import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import './styles.css';


const ChristmasMovies = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const movieTitle = params.searchTerm || '';
    const [searchTerm, setSearchTerm] = useState(movieTitle)
    const [movies, setMovies] = useState([]);
    const findMovies = () =>
    {
        fetch (`http://www.omdbapi.com/?s=christmas&apikey=cf2e21f0`)
            .then(res => res.json())
            .then(results => setMovies(results.Search))
    }


    //use useEffect for functions when you first load
    useEffect(findMovies, [searchTerm, navigate]);
    return(
        <div>
            <div className="container">



                <div className="card mt-3 border-dark">
                    <div className="card-header">
                        <p className="text fs-4 mb-0">Top Holiday Movies</p>
                    </div>
                    <ul className="list-group">
                        {movies.map(movie => (
                            <div className="list-group-item">
                                <Link className="no-underline" to={`/sneakpeak/search/details/${movie.imdbID}`} >
                                    <div className="row">
                                        <div className="d-none d-xl-block col-3">
                                            <img className="wd-small-image" alt="" src={movie.Poster}/>
                                        </div>
                                        <div className="col-9">
                                            <p className="text-white fw-bold">{movie.Title}</p>
                                            <button className="btn-danger"><i className="fas fa-sleigh"></i> Details</button>
                                        </div>

                                    </div>


                                </Link>


                            </div>


                        ))

                        }

                    </ul>



                </div>

            </div>
        </div>
    )
};

export default ChristmasMovies;