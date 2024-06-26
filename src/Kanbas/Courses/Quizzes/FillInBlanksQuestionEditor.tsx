import React, { useState, useEffect } from 'react';
import { Question } from '../../../types';

interface FillInBlanksQuestionEditorProps {
    question: Question;
    onSave: (question: Question) => void;
    onCancel: () => void;
}

const FillInBlanksQuestionEditor: React.FC<FillInBlanksQuestionEditorProps> = ({ question, onSave, onCancel }) => {
    const [localQuestion, setLocalQuestion] = useState<Question>({ ...question });
    const [blanks, setBlanks] = useState<string[]>([]);

    useEffect(() => {
        // Initialize blanks from the question text
        const matches = localQuestion.text.match(/__\w*__/g) || [];
        setBlanks(matches);
    }, [localQuestion.text]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLocalQuestion(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(localQuestion);
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    name="title"
                    value={localQuestion.title}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Points</label>
                <input
                    type="number"
                    name="points"
                    value={localQuestion.points}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Question</label>
                <textarea
                    name="text"
                    value={localQuestion.text}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Answer</label>
                <textarea
                    name="text"
                    value={localQuestion.text}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={handleSave}>Update Question</button>
                <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default FillInBlanksQuestionEditor;
