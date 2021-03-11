import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import headerReducer from './header/header.reducer';
import announcementsReducer from './announcements/announcements.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    announcements: announcementsReducer
});

export default rootReducer;