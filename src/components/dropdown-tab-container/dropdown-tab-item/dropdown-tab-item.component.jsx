import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';

import { TabContainer, MenuItemElement, MenuListContainer, ArrowBackIcon, GrowWrapper } from './dropdown-tab-item.styles';

const DropdownTabItem = ({item, ...props}) => {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }   
        setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            {
                item.sideOpen ?
                <ArrowBackIcon/>
                : null
            }
            <TabContainer 
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                label={item.title}
                 {...props}
            />
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <GrowWrapper
                        {...TransitionProps}
                        item={item.sideOpen ? "true" : undefined }
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuListContainer autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {
                                        item.tabContent.map((menuItem, index) => (
                                            (menuItem.linkUrl ? 
                                            <MenuItemElement key={index} onClick={handleClose} component={Link} to={menuItem.linkUrl}>{menuItem.name}</MenuItemElement>
                                            : 
                                            <DropdownTabItem key={index} item={menuItem.nestedEl} />)
                                        ))
                                    }  
                                </MenuListContainer>
                            </ClickAwayListener>
                        </Paper>
                    </GrowWrapper>
                )}
            </Popper>
        </div>
    );
};

export default DropdownTabItem;