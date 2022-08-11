import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialAuthenticationState = {
    isAuthenticated: false
};


const initialCounterState = {
     counter: 0,
     showCounter: true
     };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});     
     
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
            state.showCounter = !state.showCounter;
        },
        resetCounter(state) {
            state.counter = 0;
        }
    }
})


const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth : authSlice.reducer  }
});

export const couneterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;