import React from 'react';

import styles from './accordion.module.scss';

import LinkCreator from '../../components/link-creator/link-creator.component';

class Accordion extends React.Component {
    state = {
        accordionToggle: true
    }

    render () {
        const {title, items} = this.props;
        return (
            <div className={styles.accordionContainer}>
                <div className={styles.titlebar} onClick={() => this.setState({accordionToggle: !this.state.accordionToggle})}>
                    <span>
                        {title}
                    </span>
                </div>
                <div 
                    style={this.state.accordionToggle ? {display: 'block' ,maxHeight: 'auto'} :  {display: 'none' ,maxHeight: '0'} }
                    className={styles.accordionPanel}>
                    {
                        items.map((items, index) => (
                            <LinkCreator key={index} items={items} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Accordion;

