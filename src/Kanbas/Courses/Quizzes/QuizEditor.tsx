import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuizDetailsEditor from './QuizDetailsEditor';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import { RootState } from '../../store';
import { editQuiz } from './reducer';
import { Quiz } from '../../../types';

const QuizEditor: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const [activeTab, setActiveTab] = useState<'details' | 'questions'>('details');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quiz = useSelector((state: RootState) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q.id === Number(quizId))
    );

    if (!quizId) {
        return <div>Loading...</div>;
    }

    const handleSave = async (updatedQuiz: Quiz) => {
        // Dispatch the save action with updated quiz details
        dispatch(editQuiz(updatedQuiz));
    };

    const handleSaveAndPublish = async (updatedQuiz: Quiz) => {
        // Save and publish logic
        const quizToPublish = { ...updatedQuiz, published: true };
        await handleSave(quizToPublish);
        navigate(`/Kanbas/Courses/${quizId}/QuizPreview`);
    };

    return (
        <div className="quiz-editor container mt-4">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
                        onClick={() => setActiveTab('details')}
                    >
                        Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('questions')}
                    >
                        Questions
                    </button>
                </li>
            </ul>
            <div className="tab-content mt-3">
                {activeTab === 'details' && (
                    <QuizDetailsEditor
                        quizId={quizId}
                        onSave={handleSave}
                        onSaveAndPublish={handleSaveAndPublish}
                    />
                )}
                {activeTab === 'questions' && (
                    <QuizQuestionsEditor
                        quizId={quizId}
                        onSave={handleSave}
                        onSaveAndPublish={handleSaveAndPublish}
                    />
                )}
            </div>
        </div>
    );
};

export default QuizEditor;
