import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer';


const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
const store = createStore(
  reducer,
  applyMiddleware(
   ...middlewares
  ),
);


export default store;