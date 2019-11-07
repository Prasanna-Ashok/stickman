import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {courseTypeReducer} from './reducers/courseTypeReducer';
import {enrollCourseReducer} from './reducers/enrollCourseReducer';

const store = createStore(combineReducers({courseTypeReducer, enrollCourseReducer}), applyMiddleware(thunk));

export default store;