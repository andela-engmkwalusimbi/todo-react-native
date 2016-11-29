import React, { Component } from 'react';
import { View } from 'react-native';

import List from './components/list';
import Input from './components/input';
import Title from './components/title';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
        };
    }

    onAddTodo = (text) => {
        const { todos } = this.state;
        this.setState({
            todos: [text, ...todos],
        });
    }

    onRemoveTodo = (index) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo, i) => i !== index),
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <View>
                <Title>To-do List</Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        )
    }
}