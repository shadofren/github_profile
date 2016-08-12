import axios from 'axios';
const clientId = '18ed4389a2a57827ee66';
const clientSecret = '70dedc1c2aae0e680d0351bb5ab496a81ee33f73';

export function getUserData(username){
    let link = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;
    return function(dispatch){
        dispatch({type: "FETCH_USERDATA_START"})
        //do async
        axios.get(link)
            .then((response) => {
                console.log(response);
                dispatch({type: "RECEIVE_USERDATA", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USERDATA_ERROR", payload: err})
            })
    }
}

export function getUserRepos(username, perPage){
    let link = `https://api.github.com/users/${username}/repos?per_page=${perPage}&client_id=${clientId}&client_secret=${clientSecret}&sort=created`;
    return function(dispatch){
        dispatch({type: "FETCH_USERREPOS_START"})
        //do async
        axios.get(link)
            .then((response) => {
                console.log(response);
                dispatch({type: "RECEIVE_USERREPOS", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USERREPOS_ERROR", payload: err})
            })
    }
}