import React from 'react';
import Accordion from '../../my-component/my-accordion/accordion.component';

import styles from './quick-access-links-container.module.scss';

class QuickAccessLinksContainer extends React.Component {
    state ={
        title: 'samaneha',
        quickLinks: [
            {
                title: 'site bank',
                linkUrl: 'https://www.cbi.ir/'
            },
            {
                title: 'email bank',
                linkUrl: 'https://mail.cbi.ir/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.cbi.ir%2fowa%2f'
            },
            {
                title: 'automation',
                linkUrl: 'http://oas.cbi.net/menu/'
            },
            {
                title: 'internet bank',
                linkUrl: 'https://int.cbinasim.ir/'
            },
            {
                title: 'human resource',
                linkUrl: 'https://hr.cbi.ir/'
            },
            {
                title: 'taradod',
                linkUrl: 'http://clock.cbi.net:40897/'
            },
            {
                title: 'amozesh',
                linkUrl: 'https://tms.cbi.ir/'
            },
            {
                title: 'ketabkhane',
                linkUrl: 'http://lib.cbi.ir/'
            },
            {
                title: 'poshtibani',
                linkUrl: 'http://hd.cbi.ir/'
            },
            {
                title: 'amozesh rah dor',
                linkUrl: 'http://lms.cbi.ir/'
            },
            {
                title: 'ezdevaj',
                linkUrl: 'https://ve.cbi.ir/'
            }
        ]
    };

    render() {
        const { title, quickLinks } = this.state
        return (
            <div className={styles.externalLinksContainer}>
                <Accordion title={title} items={quickLinks}/>
            </div>
        );
    }
}

export default QuickAccessLinksContainer;