import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import tasksReducer from './tasks/tasks.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = combineReducers({
  tasksData: tasksReducer,
});

export default createStore(
  appStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);