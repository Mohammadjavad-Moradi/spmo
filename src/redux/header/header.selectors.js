import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectQuickLinks = createSelector(
    [selectHeader],
    header => header.quickLinksData
);

export const selectTabItems = createSelector(
    [selectHeader],
    header => header.tabItemsData
);