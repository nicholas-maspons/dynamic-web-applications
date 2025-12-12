import {configureStore, createSlice} from '@reduxjs/toolkit'
// think of a slice like a specific useReducer/reducer function
const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    // this is the action.type that's generated in the behind the scenes inactionCreator
    addSong(state, action) {
      // redux toolkit uses immer library! thats why you can
      // directly mutate state cringe
      state.push(action.payload)
    },
    removeSong(state, action) {
      // action.payload is the name of the song we want to remove
      // get the index of the song passed via payload
      const index = state.indexOf(action.payload)
      // Array.splice() - vanilla js command
      state.splice(index, 1)
    },
  },
})

// this is where you add your slices by keyname to your applicaiton wide state/store
const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
})

// each slice will be a key. The values inside are updated by it's reducers
// songSlice has no idea about movie state. It is state of all things songState
const startingState = store.getState()
console.log(JSON.stringify(startingState))

// update our metaState aka sttore with dispatch
// first key is always type
store.dispatch({type: 'song/addSong', payload: 'Song 1'})
console.log(JSON.stringify(store.getState()))

// view an action creator from a slice
console.log(songSlice.actions.addSong('Protect ya Neck'))
store.dispatch(songSlice.actions.addSong('Protect ya Neck'))

// make sure you export all the things you need
// the compiled application state to access values elsewhere
export {store}
// detructure and export out the actions/function from the compiled songSlice.actions
// should be named .actionCreator
export const {addSong, removeSong} = songSlice.actions
