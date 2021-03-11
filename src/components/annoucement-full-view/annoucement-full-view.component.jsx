import React from 'react';
import { connect } from 'react-redux';

import { selectFullData } from '../../redux/announcements/announcements.selector';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NewsContainer, NewsTitle, DividerContainer, MainImage, MainImageWrapper, Content, DateContainer } from  './announcement-full-view.styles';

const AnnoucementFullView = ({ announcementData }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <NewsContainer>
            <NewsTitle>{announcementData.title}</NewsTitle>
            <DividerContainer />
            {
                announcementData.imageUrl !== '' ? 
                <MainImageWrapper matches={matches}>
                    <MainImage url={announcementData.imageUrl} alt={announcementData.title} />
                </MainImageWrapper>
                : null
            }
            <Content>{announcementData.content}</Content>
            <DateContainer>{announcementData.date}</DateContainer>
        </NewsContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    announcementData: selectFullData(ownProps.match.params.newsId)(state)
})

export default connect(mapStateToProps)(AnnoucementFullView);