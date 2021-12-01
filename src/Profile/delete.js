import "./Profile.css";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import EmerCard from "./EmerCard";
import NewEmerContactForm from "./NewEmerContactForm";
import NewPharmContactForm from "./NewPharmContactForm";
import NewPhysContactForm from "./NewPhysContactForm";
import PharmCard from "./PharmCard";
import PhysCard from "./PhysCard";
import ProfCard from "./ProfCard";
import Loader from "react-loader-spinner";

const Profile = function (props) {
    const [userProfile, setUserProfile] = useState([]);
    const [pharmContactsArray, setPharmContacts] = useState([]);
    const [emergencyContactsArray, setEmergencyContacts] = useState([]);
    const [physicianContactsArrays, setPhysContacts] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);

    // this useEffect will fetch the user's profile data when they navigate to this page
    useEffect(() => {
        const fetchUser = async () => {
            if (props.user) {
                setIsDataLoading(true);
                const userResult = await fetch(`/profileData/user/${props.user._id}`, {
                    method: "GET",
                });
                const userResultJSON = await userResult.json();
                if (userResultJSON.user) {
                    setUserProfile(userResultJSON.user);
                }
            }
        };
        const fetchPharmContacts = async () => {
            if (props.user) {
                const contactsResult = await fetch(
                    `/profileData/pharmacyContacts/${props.user._id}`,
                    { method: "GET" }
                );
                const contactsResultJSON = await contactsResult.json();
                if (contactsResultJSON.pharmContacts) {
                    setPharmContacts(contactsResultJSON.pharmContacts);
                }
            }
        };
        const fetchPhysContacts = async () => {
            if (props.user) {
                const contactsResult = await fetch(
                    `/profileData/physicianContacts/${props.user._id}`,
                    { method: "GET" }
                );
                const contactsResultJSON = await contactsResult.json();
                if (contactsResultJSON.physContacts) {
                    setPhysContacts(contactsResultJSON.physContacts);
                }
            }
        };
        const fetchEmerContacts = async () => {
            if (props.user) {
                const contactsResult = await fetch(
                    `/profileData/emergencyContacts/${props.user._id}`,
                    { method: "GET" }
                );
                const contactsResultJSON = await contactsResult.json();
                if (contactsResultJSON.emerContacts) {
                    setEmergencyContacts(contactsResultJSON.emerContacts);
                }
            }
        };
        fetchUser();
        fetchPharmContacts();
        fetchPhysContacts();
        fetchEmerContacts();
        setIsDataLoading(false);
    }, [props.user]);

    // refresh the profile cards when it gets deleted or gets updated
    const refreshProfCard = async () => {
        if (props.user) {
            const userResult = await fetch(`/profileData/user/${props.user._id}`, {
                method: "GET",
            });
            const userResultJSON = await userResult.json();
            if (userResultJSON.user) {
                setUserProfile(userResultJSON.user);
            }
        }
    };

    // refresh the physician cards when it gets deleted or gets updated
    const refreshPhysCards = async () => {
        if (props.user) {
            const contactsResult = await fetch(
                `/profileData/physicianContacts/${props.user._id}`,
                { method: "GET" }
            );
            const contactsResultJSON = await contactsResult.json();
            if (contactsResultJSON.physContacts) {
                setPhysContacts(contactsResultJSON.physContacts);
            }
        }
    };

    // refresh the pharmacy cards when it gets deleted or gets updated
    const refreshPharmCards = async () => {
        if (props.user) {
            const contactsResult = await fetch(
                `/profileData/pharmacyContacts/${props.user._id}`,
                { method: "GET" }
            );
            const contactsResultJSON = await contactsResult.json();
            if (contactsResultJSON.pharmContacts) {
                setPharmContacts(contactsResultJSON.pharmContacts);
            }
        }
    };

    // refresh the emergency contact cards when it gets deleted or get updated
    const refreshEmerCards = async () => {
        if (props.user) {
            const contactsResult = await fetch(
                `/profileData/emergencyContacts/${props.user._id}`,
                { method: "GET" }
            );
            const contactsResultJSON = await contactsResult.json();
            if (contactsResultJSON.emerContacts) {
                setEmergencyContacts(contactsResultJSON.emerContacts);
            }
        }
    };

    // we show the page if the user is logged in and redirect to the login page if not. this component uses conditional rendering and array mapping to generate the cards.
    if (props.user && props.user._id) {
        return (
            <div className="pageContainer">
                <br />
                <br />
                <br />
                <br />
                <div className="container mycontainer rounded">
                    <main>
                        <div className="row">
                            <p className="h3-font">Profile</p>
                            <div className="col-md-4 mt-1">
                                <div className="profile-card card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                                                alt="profile avatar"
                                                width="50%"
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 mt-1">
                                <div className="profile-card card mb-3 content">
                                    <p className="m-3 pt-3 h2-font">About</p>
                                    <div className="card-body">
                                        {isDataLoading ? (
                                            <Loader
                                                type="TailSpin"
                                                color="#00BFFF"
                                                height={100}
                                                width={100}
                                            />
                                        ) : (
                                            <ProfCard
                                                key={props.user._id}
                                                user={userProfile}
                                                refreshProfCard={refreshProfCard}
                                            ></ProfCard>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-1">
                                <div className="profile-card card content">
                                    <h3 className="m-3 pt-3">Contacts</h3>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4 ">
                                                <h6>Physician Contacts</h6>
                                                {physicianContactsArrays.map((contact) => {
                                                    return (
                                                        <PhysCard
                                                            key={contact._id}
                                                            contact={contact}
                                                            refreshPhysCards={refreshPhysCards}
                                                        />
                                                    );
                                                })}

                                                <NewPhysContactForm
                                                    user={props.user}
                                                    refreshPhysCards={refreshPhysCards}
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <h6>Pharmacy Contacts</h6>
                                                {pharmContactsArray.map((contact) => {
                                                    return (
                                                        <PharmCard
                                                            key={contact._id}
                                                            contact={contact}
                                                            refreshPharmCards={refreshPharmCards}
                                                        />
                                                    );
                                                })}

                                                <NewPharmContactForm
                                                    user={props.user}
                                                    refreshPharmCards={refreshPharmCards}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <h6>Emergency Contacts</h6>
                                                {emergencyContactsArray.map((contact) => {
                                                    return (
                                                        <EmerCard
                                                            key={contact._id}
                                                            user={props.user}
                                                            contact={contact}
                                                            refreshEmerCards={refreshEmerCards}
                                                        />
                                                    );
                                                })}

                                                <NewEmerContactForm
                                                    user={props.user}
                                                    refreshEmerCards={refreshEmerCards}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </div>
        );
    } else {
        return <Redirect to="/login" />;
    }
};

export default Profile;