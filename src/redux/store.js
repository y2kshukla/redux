import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from './reducers/counter';
import listReducer from './reducers/list';

export default configureStore({
    reducer: {
        numberState: incDecReducer,
        listState: listReducer,
    },
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())