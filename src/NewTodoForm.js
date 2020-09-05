import React from 'react';

class NewTodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTodo(this.state.task);
        this.setState({
            task: ""
        });
    }

    render(){
        return(
            <form class="newTodo" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="task"
                    placeholder="New Task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    className="newTodo-input"
                />
                <button className="btn submit">Add</button>
            </form>
        );
    }
}

export default NewTodoForm;