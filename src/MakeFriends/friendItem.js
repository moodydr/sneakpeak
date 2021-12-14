import React from "react";




const friendItem = ({friend}) => {
    return (<>
            <li className="list-group-item border-dark">
                <p className="text fs-5 mb-0 mt-3">Watch with Friends</p>
            </li>

                <div className="card mt-3 mb-3 border-dark">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-lg-2 d-none d-lg-block">
                                <img className="wd-small-image" alt="" src={friend.avatar}/>
                            </div>
                            <div className="col-7 col-lg-6">
                                <div className="mt-2"></div>
                                <span className="ms-2 fw-bold wd-white">{friend.username}</span>

                            </div>
                            <div className="col-5 col-lg-4 pe-1 ps-0">
                                {/*areFriends ? "btn btn-light mt-1" :*/}
                                <button className={"btn btn-primary mt-1"} onClick={console.log('Follow')} >Follow</button>
                            </div>
                        </div>
                    </li>
                </div>


        </>
    );


}

export default friendItem;