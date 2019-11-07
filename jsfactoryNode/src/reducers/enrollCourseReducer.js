export const enrollCourseReducer =(state ={loading: false}, action) =>{
    console.log(action.data);
    switch(action.type){
        case 'ENROLL_STARTED':
            return Object.assign({}, state, {loading: true});
        case 'ENROLL_SUCCESS':
            return Object.assign({}, state, {data: action.data}, {loading: false});
        case 'ENROLL_ERROR':
            return Object.assign({}, state, {loading: true});
        default: 
            return state;
    }
}