import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


import { CardContainer, Title, Name, Supervisees } from './chart-card.styles';


const ChartCard = ({ title, name, supervisees }) => {
    return (
        <CardContainer>
        <CardContent>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <Supervisees>تعداد زیرمجموعه {supervisees}</Supervisees>
        </CardContent>
        <CardActions>
            <Button size="small">مشاهده جزییات</Button>
        </CardActions>
        </CardContainer>
    );
};

export default ChartCard;
