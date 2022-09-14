import {mockChatStore} from "../MockData/mockChatData";

import {jokeAPI} from "../api/api";


//types
const SET_CHAT_DATA = 'CHATS/SET_CHAT_DATA'
const SET_MESSAGES_DATA = 'CHATS/SET_MESSAGES_DATA'
const SET_JOKE = 'CHATS/SET_JOKE'

//Initial state for reducer
const initialState =
    {
        chat: mockChatStore,
        joke: [],
    };

//Reducer (chat)
export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES_DATA:
            return {...state, messages: action.payload};
        case SET_JOKE:
            return {...state, joke: action.payload}
        case SET_CHAT_DATA:
            return {...state, chat: action.payload}
        default:
            return state
    }
};

//thunk
export const getChucksJoke = () => async (dispatch) => {
    try {
        const response = await jokeAPI.getChucksJoke();
        if (response.status === 200) {
            dispatch(setChucksJoke(response.data.value))
        }
    } catch (error) {
        // dispatch(setError(error))
        console.log(error.message)

    }
};


export const setChucksJoke = (joke) => {
    return {
        type: SET_JOKE,
        payload: joke,
    }
}

export const setChatData = (data) => {
    return {
        type: SET_CHAT_DATA,
        payload: data,
    }
}


