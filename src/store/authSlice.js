import { createSlice } from "@reduxjs/toolkit";

const AuthSLice = createSlice({
    name: "Auth",
    initialState: {
        user: {
            name: '',
            email: '',
            password: '',
        },
        isAuth: false,
    },
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.user = action.payload;
        }
    }
})

export const { login } = AuthSLice.actions;
export default AuthSLice.reducer;