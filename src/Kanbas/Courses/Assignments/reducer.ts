import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";
import { Assignment } from "../../../types";

const initialState = {
    assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.push(action.payload);
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const index = state.assignments.findIndex(assignment => assignment._id === action.payload._id);
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
