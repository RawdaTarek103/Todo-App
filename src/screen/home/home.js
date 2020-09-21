import React from 'react';
import styles from './home.module.css'
import Button from '../../component/button/button'
import Edit from '../../component/edit/edit'
import Task from '../../component/task/task'
import Tasks from '../../component/tasks/tasks'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: '',
            tasks: [
                {
                    isChecked: false,
                    task: 'eat',
                    date: '12/10'
                }
            ]
        }
        this.handleChange.bind(this)
        this.addTask.bind(this)

    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }

    addTask = () => {
   
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.header_text}>Todo List</h1>
                </div>
                <div style={{ width: '95%', margin: 'auto' }}>
                    <p className={styles.create_text}>
                        Create
                </p>
                    <div className={styles.create_input}>
                        <input
                            className={styles.text_input}
                            placeholder='New Task'
                            onChange={this.handleChange} />


                        <Button title='Add' onPress={this.addTask} />
                    </div>
                </div>
                {/* <Button 
                    color = 'linear-gradient(rgba(217, 83, 79, .5),rgba(217, 83, 79, 1))'
                    title = 'Delete'
                    onPress = {() => {alert('hi')}}/> */}
                {/* <Edit/> */}
                {/* <Task/> */}
                <Tasks tasks = {this.state.tasks}/>
            </div>
        );
    }
}

export default Home;
