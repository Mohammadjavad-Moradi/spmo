import React from 'react';

import 'aos/dist/aos.css';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { CardContainer, CardMediaContainer, CardActionAreaContainer } from './custom-card.styles';
import CustomButton from '../custom-button/custom-button.component';


export default function CustomCard({ content, delaykey, flipdirection }) {

  const flipDirection = (flipdirection) => {
    if ( flipdirection === 0) {
      return "flip-left"
    } else if ( flipdirection % 2 === 0 ){
      return "flip-right"
    } 
    return "flip-right"
  };

  const delay = `${delaykey  * 200}`;
  return (
    <CardContainer raised data-aos={flipDirection(flipdirection)} data-aos-easing="ease-out-cubic" data-aos-delay={delay}>
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
