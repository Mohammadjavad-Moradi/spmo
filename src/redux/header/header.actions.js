import { headerActionTypes } from './header.types';

export const quickLinks = () => ({
    type: headerActionTypes.GET_QUICK_LINKS
});

export const tabItemsData = () => ({
    type: headerActionTypes.GET_TAB_ITEMS_DATA
})