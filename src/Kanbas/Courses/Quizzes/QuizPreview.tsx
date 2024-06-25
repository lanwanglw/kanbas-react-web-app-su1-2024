import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Quiz, Question } from '../../../types';
import { fetchQuiz, fetchQuizAnswer, submitQuizAnswers } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizPreview: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [previousAnswers, setPreviousAnswers] = useState<{ [key: number]: string }>({});
    const [score, setScore] = useState<number | null>(null);
    const [attempt, setAttempt] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadQuiz = async () => {
            try {
                if (quizId) {
                    const fetchedQuiz = await fetchQuiz(Number(quizId));
                    setQuiz(fetchedQuiz);

                    const userId = 'facultyId'; // Replace with actual user ID
                    const latestAnswer = await fetchQuizAnswer(Number(quizId), userId);
                    if (latestAnswer) {
                        setPreviousAnswers(latestAnswer.answers);
                        setScore(latestAnswer.score);
                        setAttempt(latestAnswer.attempt + 1);
                    }
                }
            } catch (error) {
                console.error("Error fetching quiz:", error);
            } finally {
                setLoading(false);
            }
        };
        loadQuiz();
    }, [quizId]);

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = async () => {
        if (quiz) {
            const userId = 'facultyId'; // Replace with actual user ID
            const result = await submitQuizAnswers(quiz.id, userId, answers, attempt);
            setScore(result.score);
        }
    };

    const getAnswerClass = (questionId: number) => {
        if (previousAnswers[questionId] === undefined) {
            return '';
        }
        return previousAnswers[questionId] === quiz?.questions.find(q => q.id === questionId)?.correctAnswer
            ? 'text-success'
            : 'text-danger';
    };

    if (loading) return <div>Loading...</div>;
    if (!quiz) return <div>No Quiz Found</div>;

    return (
        <div className="container mt-4">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            {quiz.questions.map((question: Question) => (
                <div key={question.id} className="mb-3">
                    <h5>{question.title}</h5>
                    <p>{question.text}</p>
                    {question.type === 'Multiple choice' && question.choices && (
                        <div>
                            {question.choices.map((choice, index) => (
                                <div className={`form-check ${getAnswerClass(question.id)}`} key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`question-${question.id}`}
                                        id={`question-${question.id}-choice-${index}`}
                                        value={choice}
                                        checked={answers[question.id] === choice || previousAnswers[question.id] === choice}
                                        onChange={() => handleAnswerChange(question.id, choice)}
                                        disabled={score !== null}
                                    />
                                    <label className="form-check-label" htmlFor={`question-${question.id}-choice-${index}`}>
                                        {choice}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {question.type === 'True/false' && (
                        <div>
                            <div className={`form-check ${getAnswerClass(question.id)}`}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question-${question.id}`}
                                    id={`question-${question.id}-true`}
                                    value="true"
                                    checked={answers[question.id] === 'true' || previousAnswers[question.id] === 'true'}
                                    onChange={() => handleAnswerChange(question.id, 'true')}
                                    disabled={score !== null}
                                />
                                <label className="form-check-label" htmlFor={`question-${question.id}-true`}>True</label>
                            </div>
                            <div className={`form-check ${getAnswerClass(question.id)}`}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question-${question.id}`}
                                    id={`question-${question.id}-false`}
                                    value="false"
                                    checked={answers[question.id] === 'false' || previousAnswers[question.id] === 'false'}
                                    onChange={() => handleAnswerChange(question.id, 'false')}
                                    disabled={score !== null}
                                />
                                <label className="form-check-label" htmlFor={`question-${question.id}-false`}>False</label>
                            </div>
                        </div>
                    )}
                    {question.type === 'Fill in the blank' && (
                        <div className={`form-group ${getAnswerClass(question.id)}`}>
                            <input
                                type="text"
                                className="form-control"
                                value={answers[question.id] || previousAnswers[question.id] || ''}
                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                disabled={score !== null}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-primary" onClick={handleSubmit} disabled={score !== null}>
                    Submit
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/Kanbas/Courses/${quizId}/QuizQuestionsEditor`)}>
                    Edit Quiz
                </button>
            </div>
            {score !== null && (
                <div className="alert alert-info mt-4">
                    <h4>Your Score: {score}</h4>
                </div>
            )}
        </div>
    );
};

export default QuizPreview;
