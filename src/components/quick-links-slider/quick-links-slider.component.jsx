import React from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { GridListContainer, SlideWrapper, GridListTileContainer, LinkContainer } from './quick-links-slider.styles';



const QuickLinksSlider = ({ tileData }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    // const colsNum = () => {
    //     return matches ? 1.5 : 2.5
    // }

    return (
        <SlideWrapper>
            <GridListContainer>
                {tileData.content.map((tile) => (
                    <GridListTileContainer key={tile.img}>
                        <LinkContainer to={tile.linkUrl}>{tile.title}</LinkContainer>
                    </GridListTileContainer>
                ))}
            </GridListContainer>
        </SlideWrapper>
    );
}

export default QuickLinksSlider;