import React from "react";
import monster1 from "../assets/monster1.png";
import monster2 from "../assets/monster2.png";
import monster3 from "../assets/monster3.png";




const ReviewList = () => {


    return (<>

            <div className="card mt-3 mb-3 border-dark">
                <div className="row g-0">
                    <ul className="list-group">
                        <div className="list-group-item">
                            <div className="row d-flex">
                                <div className="col-2 d-none d-lg-block">
                                    <div className="ps-1 mt-4 pb-2">
                                        <img src={monster1}
                                             className="img-round" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-9 card-body">
                                    <h5 className="text-warning active fs-5"> Movie Title Here</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
                                    <p className="text-white mt-1 mb-0">
                                        - John Smith
                                    </p>
                                </div>
                                <div className="col-1 card-body">
                                    <i className="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row d-flex">
                                <div className="col-2 d-none d-lg-block">
                                    <div className="ps-1 mt-4 pb-2">
                                        <img src={monster2}
                                             className="img-round" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-9 card-body">
                                    <h5 className="text-warning active fs-5"> Movie Title Here</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
                                    <p className="text-white mt-1 mb-0">
                                        - John Smith
                                    </p>
                                </div>
                                <div className="col-1 card-body">
                                    <i className="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item">
                            <div className="row d-flex">
                                <div className="col-2 d-none d-lg-block">
                                    <div className="ps-1 mt-4 pb-2">
                                        <img src={monster3}
                                             className="img-round" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-9 card-body">
                                    <h5 className="text-warning active fs-5"> Movie Title Here</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
                                    <p className="text-white mt-1 mb-0">
                                        - John Smith
                                    </p>
                                </div>
                                <div className="col-1 card-body">
                                    <i className="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>


        </>
    );
}

export default ReviewList;




