export interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    due_date: string;
    available_date: string;
    course: string;
}

export interface AppState {
    assignmentsReducer: {
        assignments: Assignment[];
    };
}