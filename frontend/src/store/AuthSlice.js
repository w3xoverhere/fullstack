import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    },
    reducers: {
        userAuthenticate(state, action) {
            state.token = action.payload.auth_token;
            console.log(state)
            console.log(action)
        },
        userLogout(state, action) {
        },
    }
})

export const {userAuthenticate} = AuthSlice.actions
export default AuthSlice.reducer;