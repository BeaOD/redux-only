// import the redux library and its store

const redux = require('redux')
const createStore = redux.legacy_createStore

//constant for action type
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'first redux action'
    }
    }

// state
const initialState ={
    numOfCakes:10
}

// reducer takes (previousState, action) => newState
const reducer = (state= initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, 
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
}
   
// STORE: reducer into redux store . - createStore method accepts the reducer as parameter
const store = createStore(reducer)
console.log('Initial state', store.getState())
//alert to changes. -subscribe method accepts a function as parameter
const unsubscribe= store.subscribe(()=>console.log('Updated state',store.getState()))
//invoke the action. thus the function up there
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()