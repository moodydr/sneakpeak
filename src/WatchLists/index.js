import React from "react";
import Watchlist from "./WatchList";
import Navigation from "../Navigation";

const WatchlistScreen = () => {
    return ( <>
        <Navigation active={"watchlist"} />
        <div className="row mt-2">
            <Watchlist/>
        </div>
    </>)
}

export default WatchlistScreen;