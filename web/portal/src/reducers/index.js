/**
 * Index reducer to combine all the reducers
 **/

/** Please update below state tree if new state is added
 {
    loading: true/false,
    token: "xxxxxxxxxx",
    account: {
		  "accountid": "facebook-10206181895733803",
		  "username": "jonas cheng",
		  "email": "jonas_cheng@trend.com.tw",
		  "role": "User"
		},
    questions: [{},{},...],
    editQuestion: {},
    editPage: int (page's id),
    orderPage: true/false
 }
**/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loading from './loading';
import token from './token';
import account from './account';
import questions from './questions';
import editQuestion from './editQuestion';
import editPage from './editPage';
import orderPage from './orderPage';

const rootReducer = combineReducers({
    loading,
    token,
    account,
    questions,
    editQuestion,
    editPage,
    orderPage,
    routing: routerReducer
});

export default rootReducer;
