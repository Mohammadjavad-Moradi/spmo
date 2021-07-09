import { createSelector } from 'reselect';

const selectProductionData = state => state.productionData;

export const selectReview = createSelector(
    [selectProductionData],
    productionData => Object.keys(productionData.review).map(key => productionData.review[key])
);

export const selectTypeTitle = createSelector(
    [selectProductionData],
    productionData => productionData.typeToShowTitle
)