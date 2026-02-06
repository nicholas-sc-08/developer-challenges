import { MonitoringPointType } from "./monitoringSlice";
import { User } from "../../types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    user: User | null,
    isAuthenticated: boolean,
    isLoading: boolean
};

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<User>) => {
            state.user = payload
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        removeUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;