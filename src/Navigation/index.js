import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {API_URL} from "../consts";
import {useState} from "react/cjs/react.production.min";


const NavigationSidebar = ( {
                                active = 'home'
                            }
) => {
    const [user, setUser] = useState({user: ''});
    const navigate = useNavigate();
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(e => navigate('/login'));
    }



    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${e.target.value}`);
        }
    };

    const configSearchButton = (e) => {
        navigate(`/search/${e.target.previousElementSibling.value}`);
    }



    return(
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="#">SneakPeak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `home` ? `active` : ``}`} to="/home">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `watchlists` ? `active` : ``}`} to="/watchlists">Watch List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `profile` ? `active` : ``}`} to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `search` ? `active` : ``}`} to="/search">Search</Link>
                            </li>
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"*/}
                            {/*       aria-haspopup="true" aria-expanded="false">Dropdown</a>*/}
                            {/*    <div className="dropdown-menu">*/}
                            {/*        <a className="dropdown-item" href="#">Action</a>*/}
                            {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                            {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                            {/*        <div className="dropdown-divider"></div>*/}
                            {/*        <a className="dropdown-item" href="#">Separated link</a>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" onKeyPress={(e) =>
                                handleKeyPress(e)}/>
                                <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={(e) =>
                                    configSearchButton(e)}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>








        </>
);

}


export default NavigationSidebar;
