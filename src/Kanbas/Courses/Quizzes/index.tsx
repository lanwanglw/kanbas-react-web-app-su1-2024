import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdCheckCircle, MdDragIndicator, MdMoreVert, MdAdd, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, deleteQuiz, publishQuiz } from './reducer';
import { RootState } from "../../store";
import { Quiz } from "../../../types";
import { useParams } from 'react-router';

export default function Quizzes() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quizzes = useSelector((state: RootState) => state.quizzesReducer.quizzes);
    const [quizToDelete, setQuizToDelete] = useState<number | null>(null);

    const handleAddQuiz = () => {
        const newQuiz: Quiz = {
            id: Date.now(),
            title: 'Unnamed Quiz',
            description: '',
            availability: 'Not available until <DATE>',
            dueDate: '',
            points: 0,
            questions: [],
            published: false,
            score: null,
            quizType: 'Graded Quiz',  // Default quiz type
            assignmentGroup: 'Quizzes',  // Default assignment group
            shuffleAnswers: true,
            timeLimit: '20 Minutes',
            multipleAttempts: false,
            attempts: 1,
            showCorrectAnswers: 'After each attempt',  // Default value
            accessCode: '',
            oneQuestionAtATime: true,
            webcamRequired: false,
            lockQuestionsAfterAnswering: false,
            availableDate: '',
            untilDate: '',
        };
        dispatch(addQuiz(newQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${newQuiz.id}`);
    };


    const handleDeleteQuiz = (id: number) => {
        setQuizToDelete(id);
    };

    const confirmDeleteQuiz = () => {
        if (quizToDelete) {
            dispatch(deleteQuiz(quizToDelete));
            setQuizToDelete(null);
        }
    };

    const cancelDeleteQuiz = () => {
        setQuizToDelete(null);
    };

    const handlePublishQuiz = (id: number) => {
        dispatch(publishQuiz(id));
    };

    return (
        <div id="wd-quizzes" className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <div className="input-group" style={{ width: "300px" }}>
                    <span className="input-group-text">
                        <MdSearch />
                    </span>
                    <input
                        id="wd-search-quiz"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-secondary me-2 d-flex align-items-center" id="wd-add-quiz-group">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button className="btn btn-danger d-flex align-items-center" id="wd-add-quiz" onClick={handleAddQuiz}>
                        <FaPlus className="me-1" /> Quiz
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <MdDragIndicator className="me-2" />
                    <h3 id="wd-quizzes-title" className="mb-0">
                        QUIZZES
                    </h3>
                </div>
                <div className="d-flex align-items-center">
                    <span className="badge bg-secondary me-2">40% of Total</span>
                    <button className="btn btn-outline-secondary d-flex align-items-center">
                        <MdAdd className="me-1" />
                    </button>
                    <MdMoreVert className="ms-2" />
                </div>
            </div>
            <ul id="wd-quiz-list" className="list-group">
                {quizzes.map((quiz: Quiz) => (
                    <li key={quiz.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: quiz.published ? "4px solid green" : "4px solid red" }}>
                        <div className="d-flex align-items-center">
                            <MdDragIndicator className="me-2" />
                            <div>
                                <Link className="wd-quiz-link text-decoration-none fw-bold text-black" to={`/Kanbas/Courses/${cid}/Quizzes/${quiz.id}`}>
                                    {quiz.title}
                                </Link>
                                <div className="small">
                                    <span className="text-muted">Availability: {quiz.availability}</span>
                                </div>
                                <div className="small"><strong>Due</strong> {quiz.dueDate} | {quiz.points} pts | {quiz.questions.length} questions</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <MdCheckCircle className={quiz.published ? "text-success" : "text-danger"} />
                            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteQuiz(quiz.id)}>
                                <MdDelete />
                            </button>
                            <button className="btn btn-sm ms-2" onClick={() => handlePublishQuiz(quiz.id)}>
                                {quiz.published ? '✅' : '🚫'}
                            </button>
                            <MdMoreVert className="ms-2" />
                        </div>
                    </li>
                ))}
            </ul>

            {quizToDelete && (
                <div className="modal fade show" style={{ display: "block" }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="btn-close" onClick={cancelDeleteQuiz}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this quiz?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={cancelDeleteQuiz}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={confirmDeleteQuiz}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
