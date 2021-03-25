import React from 'react';

import { GridListContainer, SlideWrapper, GridListTileContainer, LinkContainer } from './quick-links-slider.styles';

const QuickLinksSlider = ({ tileData }) => {

    return (
        <SlideWrapper>
            <GridListContainer>
                {tileData.content.map((tile, index) => (
                    <GridListTileContainer key={index}>
                        <LinkContainer to={tile.linkUrl}>{tile.title}</LinkContainer>
                    </GridListTileContainer>
                ))}
            </GridListContainer>
        </SlideWrapper>
    );
}

export default QuickLinksSlider;