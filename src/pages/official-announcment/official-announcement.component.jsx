import React from 'react';

import { PageContainer, ItemContainer, ListItem, PageIndicator, SelectContainer, FormControlContainer } from './official-announcement.styles';
import TitleContainer from '../../components/title-container/title-container.component';

import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const OfficialAnnouncement = () => {
    const [ list ] = React.useState([
        {
            title: 'سالروز وفات حضرت زینب کبری سلام الله علیها بر عموم شیعیان تسلیت باد',
            date: '9 اسفند 1399'
        },
        {
            title: 'ولادت حضرت علی (ع) و روز پدر گرامی باد ',
            date: '6 اسفند 1399'
        },
        {
            title: 'تاریخ برگزاری آزمون مجدد دوره های بانکداری الکترونیک و گزارش نویسی و مکاتبات اداری- تقویم زمستان 99 ',
            date: '6 اسفند 1399'
        },
        {
            title: 'قطع گاز در ساختمان ميرداماد  ',
            date: '6 اسفند 1399'
        },
        {
            title: 'اطلاعیه در خصوص تردد به باشگاه بانک ',
            date: '6 اسفند 1399'
        },
        {
            title: 'راهنمای ثبت نسخ آزاد (مراجعه به مراکز غیر طرف قرارداد)',
            date: '6 اسفند 1399'
        },
        {
            title: 'گرامیداشت قیام مردم تبریز ',
            date: '6 اسفند 1399'
        },
        {
            title: 'برگزاری آزمون های آنلاین مهارت های هفتگانه ICDL ',
            date: '6 اسفند 1399'
        },
        {
            title: 'سالروز وفات حضرت زینب کبری سلام الله علیها بر عموم شیعیان تسلیت باد',
            date: '9 اسفند 1399'
        },
        {
            title: 'ولادت حضرت علی (ع) و روز پدر گرامی باد ',
            date: '6 اسفند 1399'
        },
        {
            title: 'تاریخ برگزاری آزمون مجدد دوره های بانکداری الکترونیک و گزارش نویسی و مکاتبات اداری- تقویم زمستان 99 ',
            date: '6 اسفند 1399'
        },
        {
            title: 'قطع گاز در ساختمان ميرداماد  ',
            date: '6 اسفند 1399'
        },
        {
            title: 'اطلاعیه در خصوص تردد به باشگاه بانک ',
            date: '6 اسفند 1399'
        },
        {
            title: 'راهنمای ثبت نسخ آزاد (مراجعه به مراکز غیر طرف قرارداد)',
            date: '6 اسفند 1399'
        },
        {
            title: 'گرامیداشت قیام مردم تبریز ',
            date: '6 اسفند 1399'
        },
        {
            title: 'برگزاری آزمون های آنلاین مهارت های هفتگانه ICDL ',
            date: '6 اسفند 1399'
        },
        {
            title: 'سالروز وفات حضرت زینب کبری سلام الله علیها بر عموم شیعیان تسلیت باد',
            date: '9 اسفند 1399'
        },
        {
            title: 'ولادت حضرت علی (ع) و روز پدر گرامی باد ',
            date: '6 اسفند 1399'
        },
        {
            title: 'تاریخ برگزاری آزمون مجدد دوره های بانکداری الکترونیک و گزارش نویسی و مکاتبات اداری- تقویم زمستان 99 ',
            date: '6 اسفند 1399'
        },
        {
            title: 'قطع گاز در ساختمان ميرداماد  ',
            date: '6 اسفند 1399'
        },
        {
            title: 'اطلاعیه در خصوص تردد به باشگاه بانک ',
            date: '6 اسفند 1399'
        },
        {
            title: 'راهنمای ثبت نسخ آزاد (مراجعه به مراکز غیر طرف قرارداد)',
            date: '6 اسفند 1399'
        },
        {
            title: 'گرامیداشت قیام مردم تبریز ',
            date: '6 اسفند 1399'
        },
        {
            title: 'برگزاری آزمون های آنلاین مهارت های هفتگانه ICDL ',
            date: '6 اسفند 1399'
        },
        {
            title: 'سالروز وفات حضرت زینب کبری سلام الله علیها بر عموم شیعیان تسلیت باد',
            date: '9 اسفند 1399'
        },
        {
            title: 'ولادت حضرت علی (ع) و روز پدر گرامی باد ',
            date: '6 اسفند 1399'
        },
        {
            title: 'تاریخ برگزاری آزمون مجدد دوره های بانکداری الکترونیک و گزارش نویسی و مکاتبات اداری- تقویم زمستان 99 ',
            date: '6 اسفند 1399'
        },
        {
            title: 'قطع گاز در ساختمان ميرداماد  ',
            date: '6 اسفند 1399'
        },
        {
            title: 'اطلاعیه در خصوص تردد به باشگاه بانک ',
            date: '6 اسفند 1399'
        },
        {
            title: 'راهنمای ثبت نسخ آزاد (مراجعه به مراکز غیر طرف قرارداد)',
            date: '6 اسفند 1399'
        },
        {
            title: 'گرامیداشت قیام مردم تبریز ',
            date: '6 اسفند 1399'
        },
        {
            title: 'برگزاری آزمون های آنلاین مهارت های هفتگانه ICDL ',
            date: '6 اسفند 1399'
        }
    ])
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    
    const pageCount = Math.ceil(list.length / pageSize);

    const handleChange = (event, value) => {
        setPage(value);
    }

    const handlePageSize = (event) => {
        setPageSize(event.target.value);
      };

    const pagination = (myArray, pageNumber, pageSize) => {
        return myArray.slice((pageNumber -1 ) * pageSize, pageNumber * pageSize );
    }

    return (
        <PageContainer>
            <TitleContainer name='اعلانات اداری' color='blue' />
            {
                pagination(list, page, pageSize).map((item, index) => (
                    <React.Fragment>
                        <ItemContainer key={index}>
                            <ListItem title>{item.title}</ListItem>
                            <ListItem >{item.date}</ListItem>
                        </ItemContainer>
                        <Divider variant="middle"/>
                    </React.Fragment>
                ))
            }
            <PageIndicator page={page} count={pageCount} onChange={handleChange}/>
            
            <FormControlContainer>
                <FormControl variant='outlined'>
                    <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
                    <SelectContainer
                    labelId="demo-simple-select-outlined-label"
                    id="page-size"
                    value={pageSize}
                    onChange={handlePageSize}
                    label="Page Size"
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </SelectContainer>
                </FormControl>
            </FormControlContainer>
        </PageContainer>
    );
};

export default OfficialAnnouncement;