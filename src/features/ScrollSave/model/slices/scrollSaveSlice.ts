import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            actions: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[actions.payload.path] = actions.payload.position
        }
    }
})

export const { actions: scrollSaveAction } = scrollSaveSlice

export const { reducer: scrollSaveReducer } = scrollSaveSlice
