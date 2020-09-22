import React from 'react';
import styles from './home.module.css'
import Button from '../../component/button/button'
import Edit from '../../component/edit/edit'
import Tasks from '../../component/tasks/tasks'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: '',
            showPopup: false,
            editIndex: -1,
            tasks: [],

        }
        this.handleChange.bind(this)
        this.addTask.bind(this)
        this.getCurrentDate.bind(this)
        this.deleteTask.bind(this)
        this.editTask.bind(this)
        this.showEdit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }

    getCurrentDate = () => {
        let newDate = new Date()
        let day = newDate.getDate().toString();
        let month = (newDate.getMonth() + 1).toString();
        let year = newDate.getFullYear().toString();
        return (day + '/' + month + '/' + year);
    }

    addTask = () => {
        if (!this.state.newTask == '') {
            let newTasks = this.state.tasks;
            newTasks.push({
                isChecked: false,
                task: this.state.newTask,
                date: this.getCurrentDate()
            })
            this.inputTask.value = ''
            this.setState({
                newTask: '',
                tasks: newTasks
            })
        }
    }

    deleteTask = (index) => {
        let newTasks = this.state.tasks;
        newTasks.splice(index, 1);
        this.setState({
            tasks: newTasks
        })
    }
    editTask = (text) => {
        let newTasks = this.state.tasks;
        newTasks[this.state.editIndex].task = text
        this.setState({
            showPopup: false,
            tasks: newTasks
        })
    }

    showEdit = (index) => {
        this.setState({
            editIndex: index,
            showPopup: true
        })
    }
    render() {
        return (
            <div className={styles.container}>

                {/* start popup */}
                <div
                    className={styles.popup}
                    style={this.state.showPopup ?
                        { top: '180px', transition: 'ease-in-out 1s' }
                        : { top: '-100%', transition: 'ease-in-out 1s' }}>
                    {this.state.tasks[this.state.editIndex] && (
                        <Edit
                            cancel={() => { this.setState({ showPopup: false }) }}
                            edit={this.editTask}
                        />)}
                </div>
                <div
                    className={styles.overlay}
                    style={this.state.showPopup ? { transition: 'ease-in-out 1s' }
                    : { backgroundColor: 'transparent', transition: 'ease-in-out 1s', pointerEvents: 'none' }}/>
                    {/* end popup */}


                {/* start header */}
                <div className={styles.header}>
                    <h1 className={styles.header_text}>Todo List</h1>
                </div>
                {/* end header */}


                {/* start create */}
                <div style={{ width: '95%', margin: 'auto' }}>
                    <p style={{ fontSize: '22px', color: 'black', marginTop: '30px', marginBottom: '10px' }}>
                        Create
                    </p>
                    <div className={styles.create_input}>
                        <input
                            ref={(ref) => this.inputTask = ref}
                            className={styles.text_input}
                            placeholder='New Task'
                            onChange={this.handleChange} />
                        <Button title='Add' onPress={this.addTask} />
                    </div>
                </div>
                {/* end create */}


                {/* start list */}
                <div className={styles.tasks_header}>
                    {this.state.tasks.length == 0 ? '' :
                        <>
                            <p style={{ fontSize: '20px', color: 'black' }}>Task</p>
                            <p style={{ fontSize: '20px', marginRight: '155px', color: 'black' }}>Date</p>
                        </>
                    }
                </div>
                <Tasks
                    tasks={this.state.tasks}
                    handledelete={this.deleteTask}
                    showEdit={this.showEdit} />
                    
                {/* end list */}
            </div>
        );
    }
}

export default Home;
