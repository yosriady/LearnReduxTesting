import { combineReducers } from 'redux';
import commentReducer from '../reducers/comments_reducer'

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
