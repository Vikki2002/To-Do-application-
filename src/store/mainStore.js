import { configureStore } from "@reduxjs/toolkit"
import ColorSlice from './colorSlice.js'
import AuthSlice from './authSlice.js'
import TaskSlice from './taskSlice.js'

const store = configureStore({
    reducer: {
        Color : ColorSlice,
        Auth: AuthSlice,
        task: TaskSlice,
    }
});


export default store;