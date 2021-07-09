import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import headerReducer from './header/header.reducer';
import announcementsReducer from './announcements/announcements.reducer';
import orgChartReducer from './org-chart/org-chart.reducer';
import productionReducer from './production-data/production-data.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    announcements: announcementsReducer,
    orgChart: orgChartReducer,
    productionData: productionReducer
});

export default rootReducer;