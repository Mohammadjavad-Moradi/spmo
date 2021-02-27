import styled from "styled-components";
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';



export const SlideshowContainer = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-end' {...props} />)`
  border-bottom: 1px solid ${props => props.theme.palette.grey[600]};
  padding: 0;
`;

export const CarouselContainer = styled(({ ...props }) => <Carousel interval='4000' animation='slide' {...props} />)`
  
`;

export const SlideItem = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-end' spacing={2} {...props} />)`
  padding: 1em;
  margin: 0 auto !important;
  width: 90% !important;
  height: 250px;
`;

export const GridItemTitle = styled(({ ...props }) => <Grid component={Link} to='/inja' item {...props} />)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  &:visited {
      text-decoration: none;
      color: inherit;
  }
`;

export const GridItem = styled(({ ...props }) => <Grid item {...props} />)`
  font-size: .8rem;
  text-align: right;
`;