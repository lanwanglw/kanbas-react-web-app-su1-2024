import React, { useState } from 'react';
import { Question } from '../../../types';

interface MultipleChoiceQuestionEditorProps {
    question: Question;
    onSave: (question: Question) => void;
    onCancel: () => void;
}

const MultipleChoiceQuestionEditor: React.FC<MultipleChoiceQuestionEditorProps> = ({ question, onSave, onCancel }) => {
    const [localQuestion, setLocalQuestion] = useState<Question>({ ...question, choices: question.choices ?? [] });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLocalQuestion(prev => ({ ...prev, [name]: value }));
    };

    const handleChoiceChange = (index: number, value: string) => {
        const updatedChoices = [...(localQuestion.choices || [])];
        updatedChoices[index] = value;
        setLocalQuestion(prev => ({ ...prev, choices: updatedChoices }));
    };

    const handleAddChoice = () => {
        setLocalQuestion(prev => ({ ...prev, choices: [...(prev.choices || []), ''] }));
    };

    const handleRemoveChoice = (index: number) => {
        const updatedChoices = (localQuestion.choices || []).filter((_, i) => i !== index);
        setLocalQuestion(prev => ({ ...prev, choices: updatedChoices }));
        if (index === localQuestion.correctAnswerIndex) {
            setLocalQuestion(prev => ({ ...prev, correctAnswerIndex: -1 })); // Reset correct answer index if the correct answer is removed
        } else if (index < localQuestion.correctAnswerIndex) {
            setLocalQuestion(prev => ({ ...prev, correctAnswerIndex: prev.correctAnswerIndex - 1 })); // Adjust the index
        }
    };

    const handleSetCorrectAnswer = (index: number) => {
        setLocalQuestion(prev => ({ ...prev, correctAnswerIndex: index }));
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
                <label className="form-label">Answers</label>
                {(localQuestion.choices ?? []).map((choice, index) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            type="text"
                            value={choice}
                            onChange={(e) => handleChoiceChange(index, e.target.value)}
                            className="form-control"
                        />
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => handleSetCorrectAnswer(index)}
                            disabled={localQuestion.correctAnswerIndex === index}
                        >
                            {localQuestion.correctAnswerIndex === index ? 'Correct Answer' : 'Set as Correct'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveChoice(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" className="btn btn-outline-secondary" onClick={handleAddChoice}>
                    + Add Another Answer
                </button>
            </div>
            <div className="mt-3">
                <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSave}>Update Question</button>
            </div>
        </div>
    );
};

export default MultipleChoiceQuestionEditor;
