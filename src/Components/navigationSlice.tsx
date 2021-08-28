import { createSlice } from '@reduxjs/toolkit';
import { ANCHOR_TO_CIRCULO } from '../constants';

export const slice = createSlice({
    name: 'navigation',
    initialState: {
        value: ANCHOR_TO_CIRCULO,
    },
    reducers: {
        navigateToPage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { navigateToPage } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: string) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    dispatch(navigateToPage(amount));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.navigation.value)`
export const selectNavigate = (state: { navigation: { value: string; }; }) => state.navigation.value;

export default slice.reducer;
