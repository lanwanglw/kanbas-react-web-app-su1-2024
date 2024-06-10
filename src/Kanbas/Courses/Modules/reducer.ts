import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Module interface
interface Module {
    _id: string;
    lessons: any[];
    name: string;
    course: string;
    editing?: boolean;
}

// Define the ModulesState interface
interface ModulesState {
    modules: Module[];
}

const initialState: ModulesState = {
    modules: [],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action: PayloadAction<Module[]>) => {
            state.modules = action.payload;
        },
        addModule: (state, action: PayloadAction<{ name: string; course: string }>) => {
            const newModule: Module = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: action.payload.name,
                course: action.payload.course,
            };
            state.modules.push(newModule);
        },
        deleteModule: (state, action: PayloadAction<string>) => {
            state.modules = state.modules.filter((m) => m._id !== action.payload);
        },
        updateModule: (state, action: PayloadAction<Module>) => {
            state.modules = state.modules.map((m) =>
                m._id === action.payload._id ? action.payload : m
            );
        },
        editModule: (state, action: PayloadAction<string>) => {
            state.modules = state.modules.map((m) =>
                m._id === action.payload ? { ...m, editing: true } : m
            );
        },
    },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } =
    modulesSlice.actions;

export default modulesSlice.reducer;