import React from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestionsEditor from './QuizQuestionsEditor';
import { Quiz } from '../../../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { editQuiz } from './reducer';

const QuizQuestionsEditorWrapper: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const dispatch = useDispatch();
    const quiz = useSelector((state: RootState) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q.id === Number(quizId))
    );

    const handleSave = (quiz: Quiz) => {
        dispatch(editQuiz(quiz));
    };

    const handleSaveAndPublish = (quiz: Quiz) => {
        const updatedQuiz = { ...quiz, published: true };
        dispatch(editQuiz(updatedQuiz));
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <QuizQuestionsEditor
            quizId={quizId!}
            onSave={handleSave}
            onSaveAndPublish={handleSaveAndPublish}
        />
    );
};

export default QuizQuestionsEditorWrapper;
