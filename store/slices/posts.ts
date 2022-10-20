import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  value: []
}

// Define the initial state using that type
const initialState: CounterState = {
  value: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPost: (state, action: PayloadAction<any>) => {
      if(typeof action.payload == "object" && !Array.isArray(action.payload)) {
        state.value.push(action.payload)
        console.log("Object", action.payload)
      }
      
      if(Array.isArray(action.payload)) {
        (action.payload.length > 0) && (state.value = action.payload)
      }

      localStorage.setItem("posts", JSON.stringify(state.value))

    },
  },
})

export const { addPost } = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.state.value

export default postsSlice.reducer