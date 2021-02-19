import React from 'react';

import styles from './tab-item.module.scss';

import DropdownItem from './dropdown-item/dropdown-item.component';

class TabItem extends React.Component {
    constructor (props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggleDropdown: false
        };
    }
    

    componentDidMount () {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick (e) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
            this.setState({ toggleDropdown: false});
            return;
        } 
            this.setState({ toggleDropdown: true});
    }

    onMouseLeave () {
        this.setState({ toggleDropdown: false});
    }


    render() {
        const { title, ...otherProps } = this.props
        return (
            <div className={`${styles.tabItem} ${this.state.toggleDropdown ? styles.isDroped : null}`}
            ref={this.wrapperRef}
            >
            <span>{title}</span>
                {
                    this.state.toggleDropdown ? <DropdownItem {...otherProps}/> : null
                }
            </div>
        );
    }
}

export default TabItem;

