import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import {useNavigate} from "react-router";


const ReviewList = () => {
    const onProfile = false;
    const [reviews, setReviews] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const findAllReviews = () => {
            fetch(`${API_URL}/reviews`
            ).then(response => response.json()).then(reviews => setReviews(reviews));
    }

    const findUserReviews = () => {
        fetch(`${API_URL}/reviews/username/${user.username}`
        ).then(response => response.json()).then(reviews => setReviews(reviews));
    }

    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user);
                setAdmin(user.admin);
            }).catch(e => console.log(e));
    }

    const deleteReview = (review) =>
        fetch(`${API_URL}/reviews/${review._id}`, {
            method: 'DELETE',
        }).then(() => setReviews(
            reviews.filter(r => r !== review)));


    const [admin, setAdmin] = useState(false);
    useEffect(findUserReviews, [reviews]);
    useEffect(getProfile);

    return (<>

            <div className="card mt-3 mb-3 border-dark">
                <div className="row g-0">
                    <ul className="list-group">
                        {/*<div className="list-group-item border-1">*/}
                        {/*    <div className="row d-flex">*/}
                        {/*        <div className="col-2 d-none d-lg-block">*/}
                        {/*            <div className="ps-1 mt-4 pb-2">*/}
                        {/*                <img src="https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_SX300.jpg"*/}
                        {/*                     className="card-img" title="" alt="" />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-10 card-body">*/}
                        {/*            <h5 className="text-warning active fs-5"> Movie Title Here</h5>*/}
                        {/*            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>*/}
                        {/*            <br/>*/}
                        {/*            <span className="text-white mt-1 mb-0 me-2">*/}
                        {/*                - John Smith*/}
                        {/*            </span><button className="btn"><i className=" fas fa-trash"></i></button>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {
                            reviews.map(review =>
                                <div className="list-group-item border-1">
                                    <div className="row d-flex">
                                        <div className="col-2 d-none d-lg-block">
                                            <div className="ps-1 mt-4 pb-2">
                                                <img src={review.poster}
                                                     className="card-img" title="" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-10 card-body">
                                            <h5 className="text-warning active fs-5">{review.title}</h5>
                                            <span>{review.review}</span>
                                            <br/>
                                            <span className="text-white mt-1 mb-0 me-2">
                                        - {review.username}
                                    </span>
                                            {admin ? <button
                                                onClick={() => deleteReview(review)}
                                                className="btn"><i className=" fas fa-trash"></i></button> : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </ul>
                </div>

            </div>


        </>
    );
}

export default ReviewList;



