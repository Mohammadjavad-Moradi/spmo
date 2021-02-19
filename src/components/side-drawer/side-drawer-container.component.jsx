import React from 'react';

import styles from './side-drawer-container.module.scss';

import QuickAccessLinksContainer from '../quick-access-links/quick-access-links-container.component';

const SideDrawerContainer = () => (
    <nav className={styles.sideDrawerContainer}>
        <QuickAccessLinksContainer />
        <div>
            oghat shariiii
        </div>
        <div>
            amar bazdid
        </div>
    </nav>
);

export default SideDrawerContainer;