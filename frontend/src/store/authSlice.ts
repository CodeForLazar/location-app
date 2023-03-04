import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface auth {
   isAuth: boolean
}

const initialState: auth = {
   isAuth: false
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login(state, action: PayloadAction) {
         state.isAuth = true
      },
      logout(state) {
         state.isAuth = false
      }
   }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

