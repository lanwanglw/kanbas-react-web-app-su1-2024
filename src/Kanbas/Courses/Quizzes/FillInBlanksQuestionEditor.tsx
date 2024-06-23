import React, { useState } from 'react';
import { Question } from '../../../types';

interface FillInBlanksQuestionEditorProps {
    question: Question;
    onSave: (question: Question) => void;
    onCancel: () => void;
}

const FillInBlanksQuestionEditor: React.FC<FillInBlanksQuestionEditorProps> = ({ question, onSave, onCancel }) => {
    const [localQuestion, setLocalQuestion] = useState<Question>({ ...question });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLocalQuestion(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(localQuestion);
    };

    return (
        <div>
            <h3>Edit Fill in the Blanks Question</h3>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={localQuestion.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Points</label>
                <input
                    type="number"
                    name="points"
                    value={localQuestion.points}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Question</label>
                <textarea
                    name="text"
                    value={localQuestion.text}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default FillInBlanksQuestionEditor;
