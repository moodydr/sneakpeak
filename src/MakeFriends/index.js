import React from "react";
import monster1 from "../assets/monster1.png";
import monster2 from "../assets/monster2.png";
import monster3 from "../assets/monster3.png";
import './styles.css';




const MakeFriends = () => {


    return (<>
            <div className="card mt-3 mb-3 border-dark">
                <div className="card-header">
                    <p className="text fs-5 mb-0">Watch with Friends</p>
                </div>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <img className="wd-small-image" alt="" src={monster1}/>
                        </div>
                        <div className="col-7 col-lg-6">
                            <div className="mt-2"></div>
                            <span className="ms-2 fw-bold wd-white">@itsBeckyyy</span>

                        </div>
                        <div className="col-5 col-lg-4 pe-1 ps-0">
                            <button className="btn btn-primary mt-1">Follow</button>
                        </div>
                    </div>
                </li>


            </div>




        </>
    );
}

export default MakeFriends;
