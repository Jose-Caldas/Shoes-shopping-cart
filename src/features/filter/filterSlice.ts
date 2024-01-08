import { createSlice } from '@reduxjs/toolkit'

export interface FilterSliceState {
  isVisible: boolean
}

const initialState: FilterSliceState = {
  isVisible: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    openFilter: (state) => {
      state.isVisible = true
    },
    closeFilter: (state) => {
      state.isVisible = false
    },
  },
})

export const { openFilter, closeFilter } = filterSlice.actions

export default filterSlice.reducer
