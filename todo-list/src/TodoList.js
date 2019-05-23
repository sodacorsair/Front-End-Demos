import React, {Component, Fragment} from 'react';

import TodoItem from './TodoItem';

import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    handleItemDelete={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleButtonClick() {
        const list = this.state.list,
              inputValue = this.state.inputValue;
        this.setState(() => ({
            list: [...list, inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState(() => ({
            list: list
        }))
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">Input Content: </label>
                    <input 
                        id="insertArea"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;