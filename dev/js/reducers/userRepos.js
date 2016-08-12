const userRepos = (state=[], action) => {
    switch(action.type){
        case "FETCH_USERREPOS_START":{
            return Object.assign({}, state, {fetching:true, 
                fetched:false});
        }
        case "RECEIVE_USERREPOS":{
            return Object.assign({}, state, {fetching:false,
                fetched:true, error:null, result:action.payload});
        }
        case "FETCH_USERREPOS_ERROR":{
            return Object.assign({}, state, {fetching:false,
                error: action.payload});
        }
    }
    return state;
};

export default userRepos;