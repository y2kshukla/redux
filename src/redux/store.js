import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from './reducers/counter';

export default configureStore({
    reducer: {
        numberState: incDecReducer
    },
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())