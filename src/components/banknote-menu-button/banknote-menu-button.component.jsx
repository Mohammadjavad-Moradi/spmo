import React from 'react';

import { connect } from 'react-redux';

import { setTitleToShow } from '../../redux/production-data/production-data.actions';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { ChooseButtonContainer } from './banknote-menu-button.styles';


const BanknoteMenuBotton = ({ types, setTitleToShow }) => {
  console.log(types)
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const typesArr = Object.keys(types).map(key => types[key].name);
  
  const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
  };
  
  
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    
    setOpen(false);
  };
    
  const menuClicked = (event) => {
    handleClose(event);
    setTitleToShow({
      title: event.target.attributes.value.value,
      titleIndex: parseInt(event.target.attributes.index.value) 
    })
  }
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div >
      <div>
        <ChooseButtonContainer>           
            <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            variant="contained"
            color="primary"
            >
            انتخاب نوع کار
            </Button>
        </ChooseButtonContainer>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {
                        typesArr.map((type, index) => (
                            <MenuItem onClick={menuClicked} key={index} value={type} index={index}>{type}</MenuItem>
                        ))
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    setTitleToShow: title => dispatch(setTitleToShow(title))
});

export default connect(null, mapDispatchToProps)(BanknoteMenuBotton);
