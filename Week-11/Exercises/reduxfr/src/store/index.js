import {configureStore, createSlice} from '@reduxjs/toolkit'

// think of a slice like a specific useReducer/reducer function
const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // name + '/' + functionName is how you access them
        addSong(state, action) {
            // redux toolkit uses the immer library, which is why we are allwoed to do this (directly mutate state)
            state.push(action.payload)
        },
        removeSong(state, action) {
            // action.payload is the name of the song we want to remove
            // get the index of the song passed via payload as well
            const index = state.indexOf(action.payload)
            
            state.splice(index, 1)
        }
    }
})

// does the use of Redux at times include the use of a store folder. i think this is use interchangebly with the name state. so state/store?

// does useing redux build on reducer mean i will. ALWAYS have reducer imported if im also using redux?

// this is where you add your slices by keyname as to your application wide state/store
const store = configureStore({
    // our master reducer is from all of our slices
    // we will have a song and movie slicer (song for now [Tuesday])
    reducer: {
        songs: songSlice.reducer,
    }
})

export {store}
// export const {addSong, removeSong} = action.payload