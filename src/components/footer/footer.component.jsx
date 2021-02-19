import React from 'react';

import Grid from '@material-ui/core/Grid';

import { FooterContainer, PaperContainer } from './footer.styles';


const Footer = () => {

  return (
    <FooterContainer>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <PaperContainer>حريم شخصي كاربران</PaperContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PaperContainer>شرایط استفاده</PaperContainer>
        </Grid>
        <Grid item xs={12}>
          <PaperContainer>کليه حقوق برای بانک مرکزی جمهوری اسلامی ايران محفوظ است</PaperContainer>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
