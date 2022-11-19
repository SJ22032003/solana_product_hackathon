import {createStore} from 'redux'
import { applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer'
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;