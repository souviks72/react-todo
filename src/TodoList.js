import React from 'react';
import {v4 as uuid} from "uuid";

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    create(task){
        let newTodo = {task, id: uuid()};
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
    }

    delete(id){
        let newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: newTodos
        });
    }

    edit(id,newTask){
        let newTodos = this.state.todos.map(todo => {
            if(id === todo.id){
                return {...todo, task: newTask};
            }
            return todo;
        });
        this.setState({
            todos: newTodos
        });
    }

    render(){
        let todoList = this.state.todos.map(todo => 
            <Todo 
                key={todo.id}
                id={todo.id} 
                task={todo.task}
                deleteTodo={this.delete} 
                editTodo={this.edit}
            />
        );
        return(
            <React.Fragment>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todoList}
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoList;