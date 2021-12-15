import React, {useState,useEffect} from "react";
import monster1 from "../assets/monster1.png";
import monster2 from "../assets/monster2.png";
import monster3 from "../assets/monster3.png";
import monster4 from "../assets/monster3.png";
import './styles.css';
import {API_URL} from "../consts";
import userService from "../services/userService";
import {useHistory, useNavigate} from "react-router";
import {Link} from "react-router-dom";


const MakeFriends = () => {

    // () => setNewFriend( {...newFriend, username: user.username, following: {friend: `${f.username}`}} )
    //once we're able to pull the user list here, these functions and parts of this code may need to be moved into a makefriendslistitem component
    // which would allow us to map properly
    // const[areFriends, makeFriends] = useState(false);
    // const[buttonText, setButtonText] = useState("Follow");
    // const addFriend = () => {
    //     makeFriends(!areFriends);
    // };
    const [friends, setFriends] = useState([]);
    const getAllUsers = () => {
        userService.fetchAllUsers().then(friends => setFriends(friends));
    }

    useEffect(getAllUsers,[]);

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => res.json())
            .then(user => {
                setUser(user,[]);
            })
            // .catch(e => navigate('/login'));
    }

    useEffect(getProfile,[user])
    const [tempProf, setTempProf] = useState({})
    const setUpSwitch= (prof) => {
        setTempProf(prof);
        getOtherProfile(prof);
    }

    const getOtherProfile = (prof) => {
        console.log(prof._id);
        fetch(`${API_URL}/users/${prof._id}`)
        .then(user =>user.json()).then(res => console.log(res))
        .then((status)=> navigate(`/profile/${prof._id}`));
    }



    return (<>
        <div className="card mt-3 border-dark">
            <div className="card-header">
                <p className="text fs-4 mb-0">Watch with Friends</p>
            </div>
        </div>


            {friends.map(f => <>
                <div onClick={(e) => setUpSwitch(f)} key={f._id} className="card mt-3 mb-3 border-dark">
                    <li className="list-group-item" >
                        <div className="row">
                            <div className="col-lg-2 d-none d-lg-block">
                                <img className="wd-small-image" alt="" src={f.avatar}/>
                            </div>
                            <div className="col-7 col-lg-6">
                                <div className="mt-2"></div>
                                <span className="ms-2 fw-bold wd-white">{f.username}</span>

                            </div>
                            <div className="col-5 col-lg-4 pe-1 ps-0">
                                {/*areFriends ? "btn btn-light mt-1" :*/}
                                <button className={"btn btn-primary mt-1"} onClick={(e)=> setUpSwitch(f)}>Follow</button>
                            </div>
                        </div>

                    </li>
                </div></>)
            }
            </>


    );


}

export default MakeFriends;
