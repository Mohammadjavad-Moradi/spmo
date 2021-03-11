import { announcementsActionTypes } from './announcements.types';

import { bankNews } from '../../components/data/news.data';
const INITIAL_STATE = bankNews.official;

const announcementsReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case announcementsActionTypes.GET_PREVIEW:
            return state;
        case announcementsActionTypes.GET_LIST: 
            return state;
        case announcementsActionTypes.GET_FULL_DATA: 
            return state;
        default:
            return state;
    }
};

export default announcementsReducer;