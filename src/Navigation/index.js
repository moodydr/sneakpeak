import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ( {
                                active = 'home'
                            }
) => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">SneakPeak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `home` ? `active` : ``}`} to="/sneakpeak/home">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `explore` ? `active` : ``}`} to="/sneakpeak/explore">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `watchlists` ? `active` : ``}`} to="/sneakpeak/watchlists">Watch Lists</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `profile` ? `active` : ``}`} to="/sneakpeak/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${active === `search` ? `active` : ``}`} to="/sneakpeak/search">Search</Link>
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
                            <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>








        </>
);

}


export default NavigationSidebar;
