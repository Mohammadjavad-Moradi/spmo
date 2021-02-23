import React from 'react';

import styles from './link-creator.module.scss';

const LinkCreator = ({items}) => (
    <a className={styles.links} href={items.linkUrl} target="_blank" rel="noreferrer">{items.title}</a>
);

export default LinkCreator;