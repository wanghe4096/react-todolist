import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./todoitem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtttonClick = this.handleBtttonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input id="insertArea" value={this.state.inputVal} className='input'
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtttonClick}> 提交</button>
                </div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment >
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                < TodoItem key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete.bind(this)} />
            )
        })
    }
    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputVal: value
        }))
    }

    handleBtttonClick() {
        this.setState((prevState) => ({
            inputVal: '',
            list: [...prevState.list, prevState.inputVal]
        }))
    }

    handleItemDelete(index) {

        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
    }
}



export default TodoList;