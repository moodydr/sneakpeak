const USER_API = 'http://localhost:4000/api';


export const fetchAllUsers = () =>
    fetch(`${USER_API}/users`)
        .then(response => response.json());

export const fetchUser = () =>
    fetch(`${USER_API}/profile`)
        .then(response => response.json());


export const findUserById = (id) =>
    fetch(`${USER_API}/users/${id}`)
        .then(response => response.json());


export const updateUser = (user) =>
    fetch(`${USER_API}/users/${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json());

export default {
    fetchUser, updateUser,findUserById, fetchAllUsers
};