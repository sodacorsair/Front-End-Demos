import React, {Component} from  'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {handleItemDelete, index} = this.props;
        handleItemDelete(index);
    }

    render() {
        const {item} = this.props;
        return (
            <li>
                <span>{item}</span>
                <span className="icon-close" onClick={this.handleClick}>x</span>
            </li>
        )
    }
}

export default TodoItem;