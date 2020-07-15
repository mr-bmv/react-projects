import axios from '../../axios/axios-quiz';
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS } from './actionTypes';

export const fetchQuizes = () => {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get("tests.json");
            // console.log(response.data);
            const tests = [];
            Object.keys(response.data).forEach((id, index) => {
                tests.push({
                    id,
                    name: `Test ${index + 1}`,
                });
            });
            dispatch(fetchQuizesSuccess(tests))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}

export const fetchQuizesStart = () => {
    return {
        type: FETCH_QUIZES_START
    }
}

export const fetchQuizesSuccess = (tests) => {
    return {
        type: FETCH_QUIZES_SUCCESS,
        tests
    }
}

export const fetchQuizesError = (error) => {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}

export const fetchQuizSuccess = (quiz) => {
    return {
        type: FETCH_QUIZE_SUCCESS,
        quiz
    }
}

export const fetchQuizById = (quizId) => {
    return async dispatch => {
        // to change loading on true
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(
                `/tests/${quizId}.json`
            );
            const quiz = response.data;

            dispatch(fetchQuizSuccess(quiz))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}