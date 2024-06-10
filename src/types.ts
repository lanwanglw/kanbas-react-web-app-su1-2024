export interface Assignment {
    _id: string;
    title: string;
    course: string;
    points: number;
    due_date: string;
    available_date: string;
    description: string;
}

export interface AppState {
    assignmentsReducer: {
        assignments: Assignment[];
    };
}