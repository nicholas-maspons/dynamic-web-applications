import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        "streak": 0,
        "curr": 0,
        "goal": 0,
        "history": []
    },
    reducers: {
        setUserData(state, action) {
            // overwrites the state completely. happens on initial load
            return action.payload
        },

        addIntake(state, action) {
            // payload is just an int, while in setUserData it is an entire object
            state.curr = state.curr + action.payload
            // console.log('addIntake')
        },

    }
}
)

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})


export {store}
export const {setUserData, addIntake} = userSlice.actions