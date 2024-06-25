import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
    username: string;
    role: "STUDENT" | "FACULTY" | "ADMIN" | "USER";
}

interface AccountState {
    currentUser: User | null;
}

const initialState: AccountState = {
    currentUser: null,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;