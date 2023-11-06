const redux =  require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED" 

const initialCakeState = {
  numOfCake : 10,
}

function orderCake() {
  return {
    type: CAKE_ORDERED,
    // payload:1
  }
}

function restockCake(qty){
  return {
    type: CAKE_RESTOCKED,
    payload:qty,
  }
}


const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return{
        ...state,
        numOfCake:state.numOfCake -1
      }
    case CAKE_RESTOCKED:
      return{
        ...state,
        numOfCake:state.numOfCake + action.payload
      }

      default:
        return state
  }
}

const rootReducers = combineReducers({
  cake: cakeReducer,
})

const store = createStore(rootReducers);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update sate", store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(2))
store.dispatch(restockCake(5))

unsubscribe();