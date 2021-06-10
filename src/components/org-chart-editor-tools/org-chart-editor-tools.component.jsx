import React from 'react';

import { connect } from 'react-redux';
import { setCardData } from '../../redux/org-chart/org-chart.actions';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../custom-button/custom-button.component';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const OrgChartEditorTools = ({ editData, chartData, setCardData }) => {
    

    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const addChildren = () => {
        console.log(editData.address)
        switch (editData.address.length) {
            case 0:
                return (
                    setCardData({
                        ...chartData,
                        children: {
                            ...chartData.children
                        }
                    })
                );
            case 1:
                const obj = {
                    name: 'new name',
                    title: 'new title',
                    supervisees: 0
                }
                return (
                    setCardData({
                        ...chartData,
                        children: {
                            ...chartData.children, 
                                //chartData.children[editData.address[0]]                                
                    
                        }  
                    })
                   //console.log(chartData.children[editData.address[0]])
                )
            default: 
                return null;
        }
  
    }



    const list = (anchor, editData) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        // onClick={toggleDrawer(false)}
        // onKeyDown={toggleDrawer(false)}
        >
            <TextField id="name" label="name" placeholder={editData.cardName} variant="outlined" />
            <TextField id="title" label="title" placeholder={editData.cardTitle} variant="outlined" />
            {/* <TextField id="supervisees" label="supervisees" placeholder={editData.cardSupervisees} variant="outlined" /> */}

            <Button onClick={toggleDrawer(false)}>ok</Button>
            <Button onClick={addChildren}>add children</Button>
        </div>
    );

    return (
        <div>

            <React.Fragment>
                <CustomButton variant='contained' color='secondary' handleClick={toggleDrawer(true)}>edit</CustomButton>
                <SwipeableDrawer
                    anchor={'bottom'}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list('bottom', editData)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}

const mapStateToProps = state => ({
    chartData: state.orgChart.orgChart
})

const mapDispatchToProps = dispatch => ({
    setCardData: data => dispatch(setCardData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrgChartEditorTools);