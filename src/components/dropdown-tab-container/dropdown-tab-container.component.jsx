import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

import DropdownTabItem from './dropdown-tab-item/dropdown-tab-item.component';
import SwipeableTemporaryDrawer from '../swipeable-drawer/swipeable-drawer.component';

import {
    AppBarContainer,
    ToolbarContainer,
    TabsContainer,
    SearchBoxContainer,
    SearchIconDiv,
    InputBaseContainer
}
    from './dropdown-tab-container.styles';


const DropdownTabContainer = ({ quickLinks }) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);
    const [tabItems, setTabItems] = useState([
        {
            title: 'اخبار و اطلاعات',
            sideOpen: false,
            tabContent: [
                {
                    name: 'اخبار بانک',
                    linkUrl: '/akhbarbank'
                },
                {
                    name: 'اعلانات اداری',
                    linkUrl: '/edari'
                },
                {
                    name: 'اعلانات مناسبتی',
                    linkUrl: '/monasebati'
                },
                {
                    name: 'اخبار پولی',
                    linkUrl: '/akhbarpoli'
                },
                {
                    name: 'تحلیل مطبوعات',
                    linkUrl: '/tahlilmatboat'
                },
                {
                    name: 'نرخ ارز',
                    linkUrl: '/nerkharz'
                }
            ]
        },
        {
            title: 'آموزش و منابع انسانی',
            sideOpen: false,
            tabContent: [
                {
                    name: 'اداره اموزش',
                    linkUrl: '/edareamozesh'
                },
                {
                    name: 'سامانه منابع انسانی',
                    linkUrl: '/samanemanabeensani'
                },
                {
                    name: 'سامانه آموزش از راه دور',
                    linkUrl: '/samaneamozesh'
                },
                {
                    name: 'سامانه کنترل تردد',
                    linkUrl: '/samanetaradod'
                },
                {
                    name: 'کتابخانه',
                    linkUrl: '/ketabkhane'
                }
            ]
        },
        {
            title: 'امور فرهنگی و روابط عمومی',
            sideOpen: false,
            tabContent: [
                {
                    nestedEl: {
                        title: 'کتاب الکترونیک',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'بخش نوشتاری',
                                linkUrl: '/ketabnevshtari'
                            },
                            {
                                name: 'بخش صوتی',
                                linkUrl: '/ketabsoooti'
                            }
                        ]
                    }
                },
                {
                    name: 'دنیای ارتباطات',
                    linkUrl: '/donyayeertebatat'
                },
                {
                    nestedEl: {
                        title: 'نشریات',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'کتابچه و بروشور',
                                linkUrl: '/ketabche'
                            },
                            {
                                name: 'مقالات',
                                linkUrl: '/maghalat'
                            }
                        ]
                    }
                },
                {
                    nestedEl: {
                        title: 'مجموعه تصاویر',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'تصاویر مناسبتی',
                                linkUrl: '/tasavirmonasebati'
                            },
                            {
                                name: 'تصاویر ارسالی همکاران',
                                linkUrl: '/ersalihamkaran'
                            }
                        ]
                    }
                },
                {
                    name: 'مجموعه فیلم',
                    linkUrl: '/majmoefilm'
                },
                {
                    name: 'نظرسنجی و مسابقه',
                    linkUrl: '/nazarsanjimosabeghe'
                },
                {
                    name: 'اعلانات مفید',
                    linkUrl: '/etelaatmofid'
                },
                {
                    name: 'آشنایی با بانک',
                    linkUrl: '/ashnaeebabank'
                }
            ]
        },
        {
            title: 'اجتماعی و رفاهی',
            sideOpen: false,
            tabContent: [
                {
                    name: 'اداره باشگاه',
                    linkUrl: '/edarebashgah'
                },
                {
                    name: 'اداره رفاه',
                    linkUrl: '/edarerefah'
                },
                {
                    nestedEl: {
                        title: 'مرکز آموزشی و رفاهی نوشهر',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'ثبت نام',
                                linkUrl: '/sabtenam'
                            },
                            {
                                name: 'عملیات مرکز',
                                linkUrl: '/amaliatmarkaz'
                            }
                        ]
                    }
                }
            ]
        },
        {
            title: 'فناوری اطلاعات',
            sideOpen: false,
            tabContent: [
                {
                    nestedEl: {
                        title: 'مهندسی نرم افزار',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'راهنمای اتوماسیون',
                                linkUrl: '/rahnamaautomasion'
                            },
                            {
                                name: 'اعطای فرم دسترسی',
                                linkUrl: '/formdastrasi'
                            }
                        ]
                    }
                },
                {
                    nestedEl: {
                        title: 'زیرساخت و پشتیبانی فناوری اطلاعات',
                        sideOpen: true,
                        tabContent: [
                            {
                                name: 'اطلاعیه ها',
                                linkUrl: '/etelaeeye'
                            },
                            {
                                name: 'راهنمای آموزشی',
                                linkUrl: '/rahnamaamozeshi'
                            },
                            {
                                name: 'طرح ارتقاع سیستم عامل',
                                linkUrl: '/erteghasystem'
                            }
                        ]
                    }
                }
            ]
        },
        {
            title: 'تماس با ما',
            sideOpen: false,
            tabContent: [
                {
                    name: 'ارتباط مستقیم با رئیس کل',
                    linkUrl: '/raeeskol'
                },
                {
                    name: 'ستاد خبری اداره حراست',
                    linkUrl: '/herasat'
                },
                {
                    name: 'پرسش های متداول',
                    linkUrl: '/porseshmotadavel'
                },
                {
                    name: 'نظرها و پیام ها',
                    linkUrl: '/nazarvapayam'
                }
            ]
        }
    ]);

    const handleChange = (event, value) => {
        setValue(value);
    }

    const tabs = (
        <TabsContainer value={value} onChange={handleChange} >
            {
                tabItems.map((item, index) => (
                    <DropdownTabItem key={index} item={item} />
                ))
            }
        </TabsContainer>
    )

    return (
        <div>
            <AppBarContainer>
                <ToolbarContainer>
                    <SearchBoxContainer>
                        <SearchIconDiv>
                            <SearchIcon />
                        </SearchIconDiv>
                        <InputBaseContainer />
                    </SearchBoxContainer>
                    <TabsContainer value={value} onChange={handleChange} >
                        {
                            tabItems.map((item, index) => (
                                <DropdownTabItem key={index} item={item} />
                            ))
                        }
                    </TabsContainer>
                </ToolbarContainer>
            </AppBarContainer>
        </div>
    );
}

export default DropdownTabContainer;