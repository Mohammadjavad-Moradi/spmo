import { productionDataTypes } from './production-data.types';

const INITIAL_STATE = {
    typeToShowTitle: {
        title: 'لطفا نوع کار را انتخاب کنید',
        titleIndex: null
    },
    review: {
        handReview: {
            name: 'بازبینی دستی',
            data: {
                oneHundred: {
                    name: 'یکصد هزار ریال',
                    cages: {
                        343: {
                            name: 343,
                            conditional: 1000,
                            semi: 800,
                            wasted: 150,
                            good: 8050,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 50,
                                        wasted: 20
                                    },
                                    semi: {                                   
                                        stain: 10 ,
                                        unregistered: 10 ,
                                        lackOfInk: 10,
                                        overInk: 10 ,
                                        other: 10   
                                    },
                                    wasted: {
                                        unregistered: 5 ,
                                        lackOfInk: 5 ,
                                        overInk: 5 ,
                                        other: 5 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 750,
                                        wasted: 130
                                    },
                                    semi: { 
                                        stain: 10 ,
                                        unregistered: 50 ,
                                        lackOfInk: 300 ,
                                        overInk: 60 ,
                                        shablon: 10 ,
                                        jakhordegi: 10 ,                            
                                        sood: 200 ,
                                        poshtzadegi: 100 ,
                                        other: 10 
                                    },
                                    wasted: {
                                        unregistered: 30 ,
                                        lackOfInk: 10 ,
                                        overInk: 10 ,
                                        sood: 10 ,
                                        poshtzadegi: 50 ,
                                        other: 20 
                                    }
                                }
                            }
                        },
                        344: {
                            name: 344,
                            conditional: 0,
                            semi: 325,
                            wasted: 80,
                            good: 9595,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 5,
                                        wasted: 0
                                    },
                                    semi: {                                   
                                        stain: 5 ,
                                        unregistered: 0 ,
                                        lackOfInk: 0,
                                        overInk: 0 ,
                                        other: 0   
                                    },
                                    wasted: {
                                        lackOfInk: 0 ,
                                        overInk: 0 ,
                                        unregistered: 0 ,
                                        other: 0 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 320,
                                        wasted: 80
                                    },
                                    semi: { 
                                        shablon: 0 ,
                                        jakhordegi: 0 ,                            
                                        stain: 0 ,
                                        sood: 150 ,
                                        poshtzadegi: 50 ,
                                        unregistered: 40 ,
                                        lackOfInk: 0 ,
                                        overInk: 60 ,
                                        other: 20 
                                    },
                                    wasted: {
                                        poshtzadegi: 40 ,
                                        sood: 10 ,
                                        lackOfInk: 0 ,
                                        overInk: 30 ,
                                        unregistered: 0 ,
                                        other: 0 
                                    }
                                }
                            }
                        },
                        345: {
                            name: 345,
                            conditional: 0,
                            semi: 432,
                            wasted: 176,
                            good: 9392,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 32,
                                        wasted: 16
                                    },
                                    semi: {                                   
                                        stain: 10 ,
                                        unregistered: 10 ,
                                        lackOfInk: 0,
                                        overInk: 0 ,
                                        other: 12   
                                    },
                                    wasted: {
                                        lackOfInk: 0 ,
                                        overInk: 10 ,
                                        unregistered: 0 ,
                                        other: 6 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 400,
                                        wasted: 160
                                    },
                                    semi: { 
                                        shablon: 0 ,
                                        jakhordegi: 0 ,                            
                                        stain: 0 ,
                                        sood: 200 ,
                                        poshtzadegi: 30 ,
                                        unregistered: 50 ,
                                        lackOfInk: 120 ,
                                        overInk: 0 ,
                                        other: 0 
                                    },
                                    wasted: {
                                        poshtzadegi: 80 ,
                                        sood: 20 ,
                                        lackOfInk: 50 ,
                                        overInk: 0 ,
                                        unregistered: 10 ,
                                        other: 0 
                                    }
                                }
                            }
                        }
                    }
                },
                oneMilion: {
                    name: 'یک میلیون ریال',
                    cages: {
                        170: {
                            name: 170,
                            conditional: 1000,
                            semi: 800,
                            wasted: 150,
                            good: 8050,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 50,
                                        wasted: 20
                                    },
                                    semi: {                                   
                                        stain: 10 ,
                                        unregistered: 10 ,
                                        lackOfInk: 10,
                                        overInk: 10 ,
                                        other: 10   
                                    },
                                    wasted: {
                                        unregistered: 5 ,
                                        lackOfInk: 5 ,
                                        overInk: 5 ,
                                        other: 5 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 750,
                                        wasted: 130
                                    },
                                    semi: { 
                                        stain: 10 ,
                                        unregistered: 50 ,
                                        lackOfInk: 300 ,
                                        overInk: 60 ,
                                        shablon: 10 ,
                                        jakhordegi: 10 ,                            
                                        sood: 200 ,
                                        poshtzadegi: 100 ,
                                        other: 10 
                                    },
                                    wasted: {
                                        unregistered: 30 ,
                                        lackOfInk: 10 ,
                                        overInk: 10 ,
                                        sood: 10 ,
                                        poshtzadegi: 50 ,
                                        other: 20 
                                    }
                                }
                            }
                        },
                        171: {
                            name: 171,
                            conditional: 0,
                            semi: 325,
                            wasted: 80,
                            good: 9595,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 5,
                                        wasted: 0
                                    },
                                    semi: {                                   
                                        stain: 5 ,
                                        unregistered: 0 ,
                                        lackOfInk: 0,
                                        overInk: 0 ,
                                        other: 0   
                                    },
                                    wasted: {
                                        lackOfInk: 0 ,
                                        overInk: 0 ,
                                        unregistered: 0 ,
                                        other: 0 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 320,
                                        wasted: 80
                                    },
                                    semi: { 
                                        shablon: 0 ,
                                        jakhordegi: 0 ,                            
                                        stain: 0 ,
                                        sood: 150 ,
                                        poshtzadegi: 50 ,
                                        unregistered: 40 ,
                                        lackOfInk: 0 ,
                                        overInk: 60 ,
                                        other: 20 
                                    },
                                    wasted: {
                                        poshtzadegi: 40 ,
                                        sood: 10 ,
                                        lackOfInk: 0 ,
                                        overInk: 30 ,
                                        unregistered: 0 ,
                                        other: 0 
                                    }
                                }
                            }
                        },
                        172: {
                            name: 172,
                            conditional: 0,
                            semi: 432,
                            wasted: 176,
                            good: 9392,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 32,
                                        wasted: 16
                                    },
                                    semi: {                                   
                                        stain: 10 ,
                                        unregistered: 10 ,
                                        lackOfInk: 0,
                                        overInk: 0 ,
                                        other: 12   
                                    },
                                    wasted: {
                                        lackOfInk: 0 ,
                                        overInk: 10 ,
                                        unregistered: 0 ,
                                        other: 6 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 400,
                                        wasted: 160
                                    },
                                    semi: { 
                                        shablon: 0 ,
                                        jakhordegi: 0 ,                            
                                        stain: 0 ,
                                        sood: 200 ,
                                        poshtzadegi: 30 ,
                                        unregistered: 50 ,
                                        lackOfInk: 120 ,
                                        overInk: 0 ,
                                        other: 0 
                                    },
                                    wasted: {
                                        poshtzadegi: 80 ,
                                        sood: 20 ,
                                        lackOfInk: 50 ,
                                        overInk: 0 ,
                                        unregistered: 10 ,
                                        other: 0 
                                    }
                                }
                            }
                        },
                        173: {
                            name: 173,
                            conditional: 0,
                            semi: 2348,
                            wasted: 289,
                            good: 7363,
                            details: {
                                offset: {
                                    sum: {
                                        semi: 48,
                                        wasted: 19
                                    },
                                    semi: {                                   
                                        stain: 40 ,
                                        unregistered: 8 ,
                                        lackOfInk: 0,
                                        overInk: 0 ,
                                        other: 0   
                                    },
                                    wasted: {
                                        lackOfInk: 0 ,
                                        overInk: 19 ,
                                        unregistered: 0 ,
                                        other: 0 
                                    }
                                },
                                intaglio: {
                                    sum: {
                                        semi: 2300,
                                        wasted: 270
                                    },
                                    semi: { 
                                        shablon: 0 ,
                                        jakhordegi: 0 ,                            
                                        stain: 0 ,
                                        sood: 1800 ,
                                        poshtzadegi: 300 ,
                                        unregistered: 100 ,
                                        lackOfInk: 50 ,
                                        overInk: 50 ,
                                        other: 0 
                                    },
                                    wasted: {
                                        poshtzadegi: 50 ,
                                        sood: 150 ,
                                        lackOfInk: 0 ,
                                        overInk: 50 ,
                                        unregistered: 20 ,
                                        other: 0 
                                    }
                                }
                            }
                        }
                    }
                }
            }          
        },
        machineReview: {
            name: 'بازبینی ماشین',
            title: 'یکصدهزار ریال',
            data: {
                346: {
                    name: 346,
                    goodSheets: 9500,
                    badSheets: 500
                },
                347: {
                    name: 347,
                    goodSheets: 9100,
                    badSheets: 900
                },
                348: {
                    name: 348,
                    goodSheets: 9400,
                    badSheets: 600
                },
                349: {
                    name: 349,
                    goodSheets: 4500,
                    badSheets: 500
                }
            }
        },
        overall: {
            name: 'عملکرد کلی',
            data: {
                oneHundred: {
                    name: 'یکصد هزار ریال',
                    data: [
                        {
                            name: 'مجموع اوراق',
                            count: 65000
                        },
                        {
                            name: 'برحسب نفرات',
                            count: 57000
                        },
                        {
                            name: 'سالم',
                            count: 60537
                        },
                        {
                            name: 'نیمه سالم',
                            count: 1557
                        },
                        {
                            name: 'ناسالم',
                            count: 406
                        },
                        {
                            name: 'ضایعات ماشین',
                            count: 2500
                        }
                    ]
                },
                oneMilion: {
                    name: 'یک میلیون ریال',
                    data: [
                        {
                            name: 'مجموع اوراق',
                            count: 40000
                        },
                        {
                            name: 'برحسب نفرات',
                            count: 36000
                        },
                        {
                            name: 'سالم',
                            count: 35400
                        },
                        {
                            name: 'نیمه سالم',
                            count: 3905
                        },
                        {
                            name: 'ناسالم',
                            count: 695
                        },
                        {
                            name: 'ضایعات ماشین',
                            count: 0
                        }
                    ]
                },
                overall: {
                    name: 'امار کلی',
                    data: [
                        {
                            name: 'مجموع اوراق',
                            count: 105000
                        },
                        {
                            name: 'برحسب نفرات',
                            count: 93000
                        },
                        {
                            name: 'سالم',
                            count: 95937
                        },
                        {
                            name: 'نیمه سالم',
                            count: 5462
                        },
                        {
                            name: 'ناسالم',
                            count: 1101
                        },
                        {
                            name: 'ضایعات ماشین',
                            count: 2500
                        }
                    ]
                }
            },
            personnel: [
                {
                    name: 'present',
                    value: 25 
                },
                {
                    name: 'covid',
                    value: 7 
                },
                {
                    name: 'off',
                    value: 2 
                }
            ]
            
        }
    }
};

const productionReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case productionDataTypes.GET_REVIEW_DATA :
            return state;
        case productionDataTypes.SET_TITLE_TO_SHOW:
            return {
                ...state,
                typeToShowTitle: action.payload
            };  
        default:
            return state;
    }  
}

export default productionReducer;