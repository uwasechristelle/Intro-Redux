const store = require("./app/store");
const {cakeActions} = require('./features/cake/cakeSlice')

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
})

store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.restocked())

unsubscribe();
