const userData = (state=[], action) => {
    switch(action.type){
        case "FETCH_USERDATA_START":{
            return Object.assign({}, state, {fetching:true, 
                fetched:false});
        }
        case "RECEIVE_USERDATA":{
            return Object.assign({}, state, {fetching:false,
                fetched:true, error:null, result:action.payload});
        }
        case "FETCH_USERDATA_ERROR":{
            return Object.assign({}, state, {fetching:false,
                error: action.payload});
        }
    }
    return state;
};

export default userData;