import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const TakeQuiz: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [score, setScore] = useState<number | null>(null);
    const currentUser = useSelector((state: any) => state.user.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get(`/api/quizzes/${quizId}`);
                setQuiz(response.data);
            } catch (err) {
                console.error('Error fetching quiz:', err);
            }
        };
        fetchQuiz();
    }, [quizId]);

    const handleAnswerChange = (questionId: string, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`/api/quizzes/${quizId}/submit`, {
                userId: currentUser._id,
                answers,
                attempt: 1,
            });
            setScore(response.data.score);
        } catch (err) {
            console.error('Error submitting quiz:', err);
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
            {quiz.questions.map((question) => (
                <div key={question._id}>
                    <h3>{question.title}</h3>
                    {question.type === 'Multiple choice' && question.choices && (
                        <div>
                            {question.choices.map((choice, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name={`question-${question._id}`}
                                        value={choice}
                                        onChange={() => handleAnswerChange(question._id, choice)}
                                    />
                                    <label>{choice}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {question.type === 'True/false' && (
                        <div>
                            <input
                                type="radio"
                                name={`question-${question._id}`}
                                value="true"
                                onChange={() => handleAnswerChange(question._id, 'true')}
                            />
                            <label>True</label>
                            <input
                                type="radio"
                                name={`question-${question._id}`}
                                value="false"
                                onChange={() => handleAnswerChange(question._id, 'false')}
                            />
                            <label>False</label>
                        </div>
                    )}
                    {question.type === 'Fill in the blank' && (
                        <input
                            type="text"
                            onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                        />
                    )}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
            {score !== null && <div>Your score: {score}</div>}
        </div>
    );
};

export default TakeQuiz;
