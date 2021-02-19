import React from 'react';
import { Link } from 'react-router-dom';

import styles from './dropdown-item.module.scss';

const DropdownItem = ({tabContent}) => (
    <ul className={styles.tabContentContainer}>
        {
            tabContent.map((item, index) => (
                <Link to={item.linkUrl} key={index} className={styles.contentItem}>{item.name}</Link>
            ))
        }
    </ul>
);

export default DropdownItem;