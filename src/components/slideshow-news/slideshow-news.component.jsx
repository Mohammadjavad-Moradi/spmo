import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectPreview } from '../../redux/announcements/announcements.selector';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { SlideItem, 
    SlideshowContainer, 
    CarouselContainer, 
    GridItemTitle, 
    GridItem,
    ContentWrapper,
    SummaryWrapper,
    ImageWrapper,
    Image } from './slideshow-news.styles';

import TitleContainer from '../title-container/title-container.component';
import CustomButton from '../custom-button/custom-button.component';

const SlideShow = ({announcementPreview, history}) => {
    const [slides] = useState({
        indexCounter: 0,
        title: 'اعلانات ویژه',
        linkUrl: '/officialannouncement',
        contents: announcementPreview
    })

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <SlideshowContainer>
            <TitleContainer name={slides.title} linkUrl={slides.linkUrl} color='grey'/>
            {   
                <CarouselContainer interval='4000' animation='slide' autoPlay={false}>
                    {slides.contents.map((item, index) => (
                        <SlideItem key={index}>
                            <GridItemTitle onClick={() => history.push(`${slides.linkUrl}/${item.id}`)}>{item.title}</GridItemTitle>
                            <ContentWrapper isxs={matches}>
                                {
                                    item.imageUrl ? 
                                    <ImageWrapper isxs={matches}>
                                        <Image url={item.imageUrl} alt={item.title} />
                                    </ImageWrapper>
                                    : null
                                }
                                <SummaryWrapper isxs={matches}>{item.summary}</SummaryWrapper>
                            </ContentWrapper>
                            <GridItem >{item.date}</GridItem>
                            <CustomButton variant='contained' color='secondary' component='link' to={`${slides.linkUrl}/${item.id}`} size='medium'>
                            ادامه مطلب     
                            </CustomButton>
                        </SlideItem>
                    ))}
                </CarouselContainer>
            }
        </SlideshowContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    announcementPreview: selectPreview
})

export default withRouter(connect(mapStateToProps)(SlideShow));