import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import headerReducer from './header/header.reducer';
import announcementsReducer from './announcements/announcements.reducer';
import orgChartReducer from './org-chart/org-chart.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    announcements: announcementsReducer,
    orgChart: orgChartReducer
});

export default rootReducer;