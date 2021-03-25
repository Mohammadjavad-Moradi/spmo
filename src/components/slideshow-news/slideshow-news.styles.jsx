import styled from "styled-components";

import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';

export const SlideshowContainer = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-end' {...props} />)`
  border-bottom: 1px solid ${props => props.theme.palette.grey[600]};
  padding: 0;
`;

export const CarouselContainer = styled(({ ...props }) => <Carousel interval='4000' animation='slide' {...props} />)`
  width: 100%;
`;

export const SlideItem = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-end' spacing={2} justify='space-between' {...props} />)`
  padding: 1em;
  margin: 0 auto !important;
  width: 90% !important;
  min-height: 250px;
`;

export const GridItemTitle = styled(({ ...props }) => <Grid item {...props} />)`
  cursor: pointer;
  font-weight: bold;
  line-height: 2em;
  text-decoration: none;
  color: inherit;
  text-align: right;
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.palette.button.main};
  }
`;

export const ContentWrapper = styled(({...props}) => <Grid item container justify='flex-start' {...props} />)`
  flex-wrap: nowrap !important;
  flex-direction: ${ props => props.isxs ? 'column' : `row-reverse`};
`;

export const SummaryWrapper = styled(({...props}) => <Grid item  {...props} />)`
  font-size: .8rem;
  text-align: right;
  line-height: 2em;
  width: ${props => props.isxs ? '100%' : '75%'};
  padding: 1em;

`;

export const ImageWrapper = styled(({...props}) => <Grid item  {...props} />)`
  width: ${ props => props.isxs ? '100%' : '200px'};
  height: ${ props => props.isxs ? '200px' : '180px'};
  overflow: hidden;
`;

export const Image = styled(({...props}) => <div {...props} />)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const GridItem = styled(({ ...props }) => <Grid item {...props} />)`
  font-size: .8rem;
  text-align: left;
  min-width: 100%;
  color: ${props => props.theme.palette.grey[500]};
`;