import { productionDataTypes } from './production-data.types';

export const getProductionData = () => ({
    type: productionDataTypes.GET_REVIEW_DATA
});

export const setTitleToShow = title => ({
    type: productionDataTypes.SET_TITLE_TO_SHOW,
    payload: title
});