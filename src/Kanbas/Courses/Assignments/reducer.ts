import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    points: number;
    due_date: string;
    available_date: string;
    description: string;
}

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
        },
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

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
