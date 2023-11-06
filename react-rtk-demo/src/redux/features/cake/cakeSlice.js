import  {createSlice} from "@reduxjs/toolkit";

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

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions 