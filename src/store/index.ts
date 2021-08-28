import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../components/navigationSlice';

export default configureStore({
    reducer: {
        navigation: navigationReducer,
    },
});
