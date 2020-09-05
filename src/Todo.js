import React from 'react';

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleRemove(){
        this.props.deleteTodo(this.props.id);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateForm(e){
        e.preventDefault();
        this.props.editTodo(this.props.id,this.state.task);
        this.setState({ isEdit: false});
    }

    toggleForm(){
        this.setState({isEdit: true});
    }
    
    render(){
        
        let result;
        if(this.state.isEdit === false){
            result=(
                <React.Fragment>
                    <p>{this.props.task}</p>
                    <div className="btns">
                        <button onClick={this.toggleForm} className="edit btn">Edit</button>
                        <button onClick={this.handleRemove}  className="delete btn">Delete</button>
                    </div>
                    
                </React.Fragment>
            );
        }else{
            result = (
                <form onSubmit={this.updateForm}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button className="save btn">Save</button>
                </form>
            );
        }
        
        return(
            <div className="todo">
                {result}
            </div>
        );
    }
    
}

export default Todo;