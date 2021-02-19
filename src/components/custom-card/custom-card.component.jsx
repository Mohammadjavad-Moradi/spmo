import React from 'react';


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CardContainer, CardMediaContainer, CardActionAreaContainer } from './custom-card.styles';
import CustomButton from '../custom-button/custom-button.component';


export default function CustomCard({ content }) {

  return (
    <CardContainer raised>
      <CardActionAreaContainer>
        <CardMediaContainer
          image={content.image}
          title={content.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {content.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {
              content.textContent.slice(0, 100)
            }
          </Typography>
        </CardContent>
      </CardActionAreaContainer>
      <CardActions>
        <CustomButton variant='contained' color='secondary' component='link' to='/payambank' size='medium'>
           ادامه مطلب     
        </CustomButton>
      </CardActions>
    </CardContainer>
  );
}
