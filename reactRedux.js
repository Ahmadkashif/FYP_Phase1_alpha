const redux = require('redux');
const createStore = redux.createStore;

const rootReducer = (state = initState , action)=>{
    return state;
}

const initState = {

}

const store = createStore(rootReducer);

