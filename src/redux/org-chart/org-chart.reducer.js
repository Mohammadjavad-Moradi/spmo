import {
    orgChartActionTypes
} from './org-chart.types';

const INITIAL = {
    orgChart: {
        address: [],
        name: 'اقای شکری',
        title: 'رییس سازمان',
        supervisees: 6,
        children: {
            0: {
                address: [1],
                name: 'child 2',
                title: 'title 2',
                supervisees: 0,
                children: []         
            },
            1: {
                address: [1],
                name: 'child 2',
                title: 'title 2',
                supervisees: 0,
                children: []         
            },
            2: {
                address: [0],
                name: 'اقای اذرمهر',
                title: 'معاون تولید',
                supervisees: 4,
                children: {
                    0: {
                        address: [0],
                        name: 'اقای محمدی',
                        title: 'سرپرست بازبینی',
                        supervisees: 2,
                        children: {
                            0: {
                                address: [1],
                                name: 'اقای ظهیری',
                                title: 'رییس دایره بازبینی',
                                supervisees: 1,
                                children: {
                                    
                                }         
                            },
                            1: {
                                address: [1],
                                name: 'اقای قنبریان',
                                title: 'رییس دایره بازبینی',
                                supervisees: 0,
                                children: []         
                            }
                        }         
                    },
                    1: {
                        address: [1],
                        name: 'اقای امیدی',
                        title: 'سرپرست امور مقدماتی 1',
                        supervisees: 0,
                        children: []         
                    },
                    2: {
                        address: [2],
                        name: 'اقای نادری',
                        title: 'سرپرست سالن چاپ',
                        supervisees: 0,
                        children: []         
                    },
                    3: {
                        address: [2],
                        name: 'اقای عظیمی',
                        title: 'سرپرست امور مقدماتی 2',
                        supervisees: 0,
                        children: []         
                    }
                }         
            }
        }
    }
}

const orgChartReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case orgChartActionTypes.GET_CARD_DATA:
            return (
                state
            )
        case orgChartActionTypes.SET_CARD_DATA:
            return {
                ...state,
                orgChart: action.payload
            }
            default:
                return state;
    }
}

export default orgChartReducer;