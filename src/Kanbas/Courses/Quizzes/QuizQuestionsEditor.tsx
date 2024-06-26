import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { Quiz, Question } from '../../../types';
import { addQuestion, editQuestion, deleteQuestion } from './reducer';
import MultipleChoiceQuestionEditor from './MultipleChoiceQuestionEditor';
import TrueFalseQuestionEditor from './TrueFalseQuestionEditor';
import FillInBlanksQuestionEditor from './FillInBlanksQuestionEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

interface QuizQuestionsEditorProps {
    quizId: string;
    onSave: (quiz: Quiz) => void;
    onSaveAndPublish: (quiz: Quiz) => void;
}

const QuizQuestionsEditor: React.FC<QuizQuestionsEditorProps> = ({ quizId, onSave, onSaveAndPublish }) => {
    const dispatch = useDispatch();
    const quiz = useSelector((state: RootState) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q.id === Number(quizId))
    );

    const [questions, setQuestions] = useState<Question[]>(quiz?.questions || []);
    const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
    const [newQuestionType, setNewQuestionType] = useState<string | null>(null);

    const handleAddQuestion = (type: string) => {
        const question: Question = {
            id: Date.now(),
            title: '',
            text: '',
            type: type,
            points: 1,
            choices: type === 'Multiple choice' ? [''] : [],
            correctAnswerIndex: -1,
        };
        setQuestions([...questions, question]);
        dispatch(addQuestion({ quizId: Number(quizId), question }));
        setEditingQuestion(question);
        setNewQuestionType(null);
    };

    const handleEditQuestion = (id: number, updatedQuestion: Question) => {
        const updatedQuestions = questions.map(q => q.id === id ? updatedQuestion : q);
        setQuestions(updatedQuestions);
        dispatch(editQuestion({ quizId: Number(quizId), question: updatedQuestion }));
        setEditingQuestion(null); // Close the editor after saving
    };

    const handleDeleteQuestion = (id: number) => {
        const updatedQuestions = questions.filter(q => q.id !== id);
        setQuestions(updatedQuestions);
        dispatch(deleteQuestion({ quizId: Number(quizId), questionId: id }));
    };

    const handleSave = () => {
        const updatedQuiz: Quiz = { ...quiz!, questions };
        onSave(updatedQuiz);
    };

    const handleSaveAndPublish = () => {
        const updatedQuiz: Quiz = { ...quiz!, questions, published: true };
        onSaveAndPublish(updatedQuiz);
    };

    return (
        <div className="quiz-questions-editor container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Points {questions.reduce((total, q) => total + q.points, 0)}</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        + New Question
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><button className="dropdown-item" onClick={() => handleAddQuestion('Multiple choice')}>Multiple Choice</button></li>
                        <li><button className="dropdown-item" onClick={() => handleAddQuestion('True/false')}>True/False</button></li>
                        <li><button className="dropdown-item" onClick={() => handleAddQuestion('Fill in the blank')}>Fill in the Blank</button></li>
                    </ul>
                </div>
            </div>
            <ul className="list-group mb-3">
                {questions.map(question => (
                    <li key={question.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{question.title}</span>
                        <div>
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setEditingQuestion(question)}>Edit</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteQuestion(question.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2" onClick={() => setEditingQuestion(null)}>Cancel</button>
                <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
                <button className="btn btn-success" onClick={handleSaveAndPublish}>Save and Publish</button>
            </div>
            {editingQuestion && (
                <div className="mt-4">
                    {editingQuestion.type === 'Multiple choice' && (
                        <MultipleChoiceQuestionEditor
                            question={editingQuestion}
                            onSave={(updatedQuestion: Question) => handleEditQuestion(editingQuestion.id, updatedQuestion)}
                            onCancel={() => setEditingQuestion(null)}
                        />
                    )}
                    {editingQuestion.type === 'True/false' && (
                        <TrueFalseQuestionEditor
                            question={editingQuestion}
                            onSave={(updatedQuestion: Question) => handleEditQuestion(editingQuestion.id, updatedQuestion)}
                            onCancel={() => setEditingQuestion(null)}
                        />
                    )}
                    {editingQuestion.type === 'Fill in the blank' && (
                        <FillInBlanksQuestionEditor
                            question={editingQuestion}
                            onSave={(updatedQuestion: Question) => handleEditQuestion(editingQuestion.id, updatedQuestion)}
                            onCancel={() => setEditingQuestion(null)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizQuestionsEditor;
