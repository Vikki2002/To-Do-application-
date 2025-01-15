import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
    name: "Color",
    initialState: {
        isSet: false,
        bgColor: "",
        textColor: "",
    },
    reducers: {
        setDarkMode(state,action) {
            state.isSet = true;
            state.darkMode = action.payload;
            state.textColor = action.payload;
        },
        setLightMode(state,action) {
            state.isSet = false;
            state.darkMode = action.payload;
            state.textColor = action.payload;
        }
    }

})

export const { setDarkMode, setLightMode } = ColorSlice.actions;
export default ColorSlice.reducer;