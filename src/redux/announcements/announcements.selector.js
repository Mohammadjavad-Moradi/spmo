import { createSelector } from 'reselect';

const selectAnnouncements = state => state.announcements;

export const selectPreview = createSelector(
    [selectAnnouncements],
    announcements => Object.keys(announcements).map(key => announcements[key]).slice(0, 4)
);

export const selectList = createSelector(
    [selectAnnouncements],
    announcements => Object.keys(announcements).map(key => announcements[key])
)

export const selectFullData = newsId => 
    createSelector(
        [selectAnnouncements],
        announcements => announcements[newsId]
    );