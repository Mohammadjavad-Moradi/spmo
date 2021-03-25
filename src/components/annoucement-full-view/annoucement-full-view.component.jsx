import React from 'react';
import { connect } from 'react-redux';

import { selectFullData } from '../../redux/announcements/announcements.selector';

import ImagesSlideshow from '../images-slideshow/images-slideshow.component';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NewsContainer, NewsTitle, DividerContainer, MainImage, MainImageWrapper, Content, ImagesContainer, DateContainer } from  './announcement-full-view.styles';

const AnnoucementFullView = ({ announcementData, match }) => {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <NewsContainer>
            <NewsTitle>{announcementData.title}</NewsTitle>
            <DividerContainer />
            {
                announcementData.imageUrl !== '' ? 
                <MainImageWrapper matches={matches ? 'true' : undefined }>
                    <MainImage url={announcementData.imageUrl} alt={announcementData.title} />
                </MainImageWrapper>
                : null
            }
            <Content>{announcementData.content}</Content>
            {
                announcementData.images.length > 0 ?
                <ImagesContainer>
                    <ImagesSlideshow tileData={announcementData.images} />
                </ImagesContainer>
                : null
            }
            <DateContainer>{announcementData.date}</DateContainer>
        </NewsContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    announcementData: selectFullData(ownProps.match.params)(state)
})

export default connect(mapStateToProps)(AnnoucementFullView);