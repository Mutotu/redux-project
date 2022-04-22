// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showcounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showcounter = !state.showcounter;
    },
  },
});
const initialAuthstate = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: isAuthenticated,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// // const counterReducer = (state = { counter: 0, showcounter }, action) => {
// const counterReducer = (state = initialState, action) => {
//   if (action === "increment") {
//     return {
//       counter: state.counter + 1,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showcounter: state.showcounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showcounter: !state.showcounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = counterSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
