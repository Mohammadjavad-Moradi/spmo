import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { LinkContainer, TitleContainer } from './horizontal-tabs.styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



export default function HorizontalTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [news, setNews] = React.useState([
        {
            title: 'اعلانات اداری',
            content: [
                {
                    contentTitle: 'راهنمای ثبت نسخ آزاد (مراجعه به مراکز غیر طرف قرارداد) ',
                    linkUrl: '/link'
                },
                {
                    contentTitle: 'گرامیداشت قیام مردم تبریز',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	برگزاری آزمون های آنلاین مهارت های هفتگانه',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	آگهي دعوت به همکاري اداره حراست بانک ها و موسسات پولی غیربانکی',
                    linkUrl: '/link'
                },
                {
                    contentTitle: 'گزارش سمینار آموزشی " آشنایی با تغییرات و الزامات جدید قانون اصلاح قانون صدور چک"',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	اطلاعیه خودروهای متوقف شده در پارکینگ طبقاتی میرداماد',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	گزارش و اسامی برندگان مسابقات ولادت حضرت زینب سلام الله علیها و شهادت حضرت فاطمه سلام الله علیها',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '22 بهمن همیشه زنده است...',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	قطعی گاز روز دوشنبه در ساختمان میرداماد',
                    linkUrl: '/link'
                },
                {
                    contentTitle: 'اداره تدارکات - آخرین مهلت ارسال سند‌درخواست و بازگشت کالا',
                    linkUrl: '/link'
                },
            ]
        },
        {
            title: 'اخبار مرتبط با کرونا',
            content: [
                {
                    contentTitle: '	توصیه‌ها و اقدامات بهداشتی در زمینه ویروس کرونای انگلیسی',
                    linkUrl: '/link'
                },
                {
                    contentTitle: 'مجموعه آموزشی بسیج ملی تغذیه سالم برای پیشگیری از بیماری کرونا ',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	توصیه هایی برای پیشگیری از ابتلا به ویروس کرونا',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	پایگاه اطلاع رسانی و پایش آثار اقتصادی کرونا',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	اوضاع کرونا در گفت و گو با دکتر هاشمیان رئیس ICU بیمارستان مسیح دانشوری',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	دستورالعمل رعایت فاصله فیزیکی در دوران شیوع کرونا',
                    linkUrl: '/link'
                },
            ]
        },
        {
            title: 'اعلانات مناسبتی',
            content: [
                {
                    contentTitle: 'تسلیت - مرحومه سرکار خانم زهرا سلجوقی همکار بازنشسته اداره آمار اقتصادی ',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - مادرگرامی جناب آقای محمد طهماسبی پور همکار اداره نشر اسکناس و خزانه',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - مادرگرامی جناب آقای سیدعلی اصغر میرمحمدصادقی مدیرکل محترم اعتبارات ',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - برادر گرامی جناب آقای محمدمراد سلطانیان همکار اداره بررسیها و سیاستهای اقتصادی',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - پدر گرامی سرکار خانم دومیرائی همکار اداره تدارکات',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - مادرگرامی جناب آقای ابوذر ربانی همکار اداره آمار و تعهدات ارزی',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - پدر گرامی سرکار خانم آیسان عاصمی راد همکار اداره آمار اقتصادی',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - پدر گرامی جناب آقای امین قبادی همکار اداره بررسیها و سیاستهای اقتصادی ',
                    linkUrl: '/link'
                },
                {
                    contentTitle: '	تسلیت - مادرگرامی جناب آقای نصراله جاهد همکار بازنشسته اداره منابع انسانی',
                    linkUrl: '/link'
                },
            ]
        }
    ])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <TitleContainer>
                <span>اعلانات</span>
            </TitleContainer>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {
                        news.map((item, index) => (
                            <Tab label={item.title} key={index} {...a11yProps(index)} />
                        ))
                    }
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    news.map((panel, index) => (
                        <TabPanel value={value} index={index} dir={theme.direction} key={index}>
                            {
                                panel.content.map((item, id) => (
                                    <LinkContainer key={id} to={item.linkUrl}>{item.contentTitle}</LinkContainer>
                                ))
                            }
                        </TabPanel>
                    ))
                }
            </SwipeableViews>
        </div>
    );
}
