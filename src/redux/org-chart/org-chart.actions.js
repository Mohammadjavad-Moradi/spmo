import { orgChartActionTypes } from './org-chart.types';

export const getCardData = () => ({
    type: orgChartActionTypes.GET_CARD_DATA,
});

export const setCardData = (data) => ({
    type: orgChartActionTypes.SET_CARD_DATA,
    payload: data
})