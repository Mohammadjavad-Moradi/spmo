import React from 'react';

import styles from './dropdown-container.module.scss';

import Accordion from '../../my-component/my-accordion/accordion.component';

class DropDownContainer extends React.Component {
    state = {
        sections: [
            {
                title: 'drop title',
                id: 1,
                items: [
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 1
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 2
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 3
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 4
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 5
                    }
                ]
            },
            {
                title: 'drop title',
                id: 2,
                items: [
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 1
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 2
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 3
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 4
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 5
                    }
                ]
            },
            {
                title: 'drop title',
                id: 3,
                items: [
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 1
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 2
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 3
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 4
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 5
                    }
                ]
            },
            {
                title: 'drop title',
                id: 4,
                items: [
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 1
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 2
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 3
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 4
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 5
                    }
                ]
            },
            {
                title: 'drop title',
                id: 5,
                items: [
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 1
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 2
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 3
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 4
                    },
                    {
                        date: '1,1,99',
                        description: 'some text with links',
                        id: 5
                    }
                ]
            }
        ]
    }

    render () {
        return (
            <div className={styles.dropdownContainer}>
                {
                    this.state.sections.map(({id, ...otherProps}) => (
                        <Accordion key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default DropDownContainer;