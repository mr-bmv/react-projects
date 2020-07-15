import axios from '../../axios/axios-quiz';
import { FETCH_QIZES_START, FETCH_QIZES_SUCCESS, FETCH_QIZES_ERROR } from './actionTypes';

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
        type: FETCH_QIZES_START
    }
}

export const fetchQuizesSuccess = (tests) => {
    return {
        type: FETCH_QIZES_SUCCESS,
        tests
    }
}

export const fetchQuizesError = (error) => {
    return {
        type: FETCH_QIZES_ERROR,
        error
    }
}

