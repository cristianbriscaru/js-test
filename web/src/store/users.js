import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as usersApi from '../api/users';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(createUser(user))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createUser = createAsyncThunk(
    'users/create',
    async (user) => {
        const response = await usersApi.create(user);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
        error: null,
        status: 'idle',
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUser: (state, user) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = user;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.status = 'idle';
            state.user = action.payload;
        })
    },
});

export const { setUser } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.users.user)`
export const selectUser = (state) => state.users.user;
export const selectUserStatus = (state) => state.users.status;
export const selectUserError = (state) => state.users.error;

export default usersSlice.reducer;
