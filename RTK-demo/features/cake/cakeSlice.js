const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
  numOfCakes : 10
}

const cakeSlice = createSlice({
  name : "cake",
  initialState,
  reducers:{
    ordered: (state, action) => {
      state.numOfCakes -= action.payload
    },
    restocked: (state) => {
      state.numOfCakes++
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions 