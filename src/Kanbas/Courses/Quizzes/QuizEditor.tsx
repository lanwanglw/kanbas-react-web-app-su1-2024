import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizDetailsEditor from './QuizDetailsEditor';
import QuizQuestionsEditor from './QuizQuestionsEditor';

const QuizEditor: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const [activeTab, setActiveTab] = useState<'details' | 'questions'>('details');

    if (!quizId) {
        return <div>Loading...</div>;
    }

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
                {activeTab === 'details' && <QuizDetailsEditor quizId={quizId} />}
                {activeTab === 'questions' && <QuizQuestionsEditor quizId={quizId} />}
            </div>
        </div>
    );
};

export default QuizEditor;
