import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

interface Quiz {
    _id: string;
    title: string;
    description: string;
    questions: Question[];
    published: boolean;
}

interface Question {
    _id: string;
    title: string;
    type: string;
    points: number;
    choices?: string[];
    correctAnswer: string;
}

const StudentQuizzes: React.FC = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [error, setError] = useState('');
    const currentUser = useSelector((state: any) => state.user.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get(`/api/students/${currentUser._id}/quizzes`);
                setQuizzes(response.data);
            } catch (err) {
                setError('Error fetching quizzes');
            }
        };
        fetchQuizzes();
    }, [currentUser]);

    const handleTakeQuiz = (quizId: string) => {
        navigate(`/Kanbas/Quizzes/${quizId}`);
    };

    return (
        <div>
            <h1>My Quizzes</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        <span>{quiz.title}</span>
                        <button onClick={() => handleTakeQuiz(quiz._id)}>Take Quiz</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentQuizzes;
