import React, { useState } from 'react';
import { Question } from '../../../types';

interface TrueFalseQuestionEditorProps {
    question: Question;
    onSave: (question: Question) => void;
    onCancel: () => void;
}

const TrueFalseQuestionEditor: React.FC<TrueFalseQuestionEditorProps> = ({ question, onSave, onCancel }) => {
    const [localQuestion, setLocalQuestion] = useState<Question>({ ...question });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLocalQuestion(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setLocalQuestion(prev => ({ ...prev, correctAnswer: name === 'trueOption' ? checked : !checked }));
    };

    const handleSave = () => {
        onSave(localQuestion);
    };

    return (
        <div className="container mt-4">
            <h3>Edit True/False Question</h3>
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
                <label className="form-label">Answers</label>
                <div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="trueOption"
                            checked={localQuestion.correctAnswer === true}
                            onChange={handleCheckboxChange}
                            className="form-check-input"
                            id="trueOption"
                        />
                        <label className="form-check-label" htmlFor="trueOption">True</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="falseOption"
                            checked={localQuestion.correctAnswer === false}
                            onChange={handleCheckboxChange}
                            className="form-check-input"
                            id="falseOption"
                        />
                        <label className="form-check-label" htmlFor="falseOption">False</label>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default TrueFalseQuestionEditor;
