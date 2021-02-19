import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { HeaderBar, LogoContainer, AppBarContainer, ToolBarContainer, TabContainer, TabsContainer, ProfileAndSearch } from './header-container.styles';

import Profile from '../profile/profile.component';
import DropdownTabContainer from '../dropdown-tab-container/dropdown-tab-container.component';
import SwipeableTemporaryDrawer from '../swipeable-drawer/swipeable-drawer.component';



const HeaderContainer = ({currentUser}) => {
    
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    
    
    const[value, setValue] = useState(0);
    const[quickLinks, setQuickLinks] = useState({
        title: 'دسترسی های سریع',
        content : [
            {
                title: 'خانه',
                linkUrl: '/'
            },
            {
                title: 'اخبار پولی و بانکی',
                linkUrl: '/akhbarpoli'
            },
            {
                title: 'نظرها وپیام ها',
                linkUrl: '/nazarvapayam'
            },
            {
                title: 'اداره باشگاه',
                linkUrl: '/edarebashgah'
            },
            {
                title: 'اداره رفاه',
                linkUrl: '/edarerefah'
            },
            {
                title: 'بسیج',
                linkUrl: '/basij'
            },
            {
                title: 'کانون بازنشستگان',
                linkUrl: '/bazneshaste'
            }
        ]
    })

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

    useEffect(() => {
        quickLinks.content.map((item, index) => {
                if (item.linkUrl === window.location.pathname) {
                    setValue(index);
                }
            })
    },[quickLinks])

    function handleChange(event, value) {
        setValue(value);
    }


    const tabs = (
        <ToolBarContainer disableGutters>
            <ProfileAndSearch>
                <Profile currentUser={currentUser} />
                { matchesMd ? <div></div> : null }                  
            </ProfileAndSearch> 

            <TabsContainer value={value} onChange={handleChange}>
                { matchesMd ? <SwipeableTemporaryDrawer items={tabItems} quickLinks={quickLinks}/> : null }
                {
                    matchesSm ?
                    null
                    :
                    quickLinks.content.map((item, index) => (
                        <TabContainer key={index} label={item.title} component={Link} to={item.linkUrl}/>
                    ))
                }                  
            </TabsContainer>
        </ToolBarContainer>
    )

    return (
        <React.Fragment>
            {
                matchesXs ?
                null:
                <HeaderBar>
                    <Link  to='/'>
                        <LogoContainer onClick={() => setValue(0)}/>
                    </Link>
                </HeaderBar>
            }
            <AppBarContainer >       
                { tabs }
            </AppBarContainer>
            { matchesMd ? null : <DropdownTabContainer quickLinks={quickLinks}/>}
        </React.Fragment>
    )
}

export default HeaderContainer;