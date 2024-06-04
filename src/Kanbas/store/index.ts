import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/reducer";

const store = configureStore({
    reducer: {
        assignments: assignmentsReducer,
    },
});

export default store;
