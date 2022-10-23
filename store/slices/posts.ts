import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  value: []
}

const initialState: CounterState = {
  value: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
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

export const selectCount = (state: any) => state.state.value

export default postsSlice.reducer