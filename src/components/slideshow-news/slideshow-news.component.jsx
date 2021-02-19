import React, { useState } from 'react';

import { SlideItem, SlideshowContainer, SlideTitle, SlideTitleConteiner, CarouselContainer, GridItemTitle, GridItem } from './slideshow-news.styles';

const SlideShow = () => {
    const [slides, setSlides] = useState({
        indexCounter: 0,
        title: 'اعلانات ویژه',
        linkUrl: 'elanatvije',
        contents: [
            {
                name: 'آگهي دعوت به همکاري',
                content: `اداره حراست بانک‌ها و موسسات پولی غیربانکی به منظور تکميل نيروي انساني خود از ميان همکاران واجد شرایط (به استثنای کارکنان واحدهای تولیدی و مسلط به مهارت‌های هفت گانه ICDL و کلیه امور مربوط به اتوماسیون اداری و امور دفتری)، با مدرک تحصیلی دیپلم یا کاردانی و  کارشناسی جهت تصدي سمت "مسئول امور دفتری" دعوت به همکاري مي‌نمايد.
                متقاضيان محترم مي‌توانند جهت کسب اطلاعات بيشتر با شماره تلفن‌ 29952580 تماس حاصل نموده و در صورت تمایل درخواست های خود را به دفتر آن اداره ارسال دارند.`,
                date: '1399/11/26'
            },
            {
                name: `گزارش سمینار آموزشی " آشنایی با تغییرات و الزامات جدید قانون اصلاح قانون صدور چک"`,
                content: 'content of slide 2 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 2'
            },
            {
                name: 'اطلاعیه خودروهای متوقف شده در پارکینگ طبقاتی میرداماد',
                content: 'content of slide 3 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 3'
            },
            {
                name: 'title of slide 4',
                content: 'content of slide 4 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 4'
            },
            {
                name: 'title of slide 5',
                content: 'content of slide 5 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 5'
            },
            {
                name: 'title of slide 6',
                content: 'content of slide 5 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 5'
            },
            {
                name: 'title of slide 7',
                content: 'content of slide 5 Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index',
                date: 'date of slide 5'
            }
        ]
    })

    return (
        <SlideshowContainer>
            <SlideTitleConteiner>
                <SlideTitle to={slides.linkUrl}>{ slides.title }</SlideTitle>
            </SlideTitleConteiner>
            {   
                <CarouselContainer interval='4000' animation='slide'>
                    {slides.contents.slice(0, 4).map((item, index) => (
                        <SlideItem key={index}>
                            <GridItemTitle >{item.name}</GridItemTitle>
                            <GridItem >{item.content.slice(0, 200)}...</GridItem>
                            <GridItem >{item.date}</GridItem>
                        </SlideItem>
                    ))}
                </CarouselContainer>
            }
        </SlideshowContainer>
    )
}

export default SlideShow;