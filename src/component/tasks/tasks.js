import React from 'react';
import styles from './tasks.module.css';
import Task from '../task/task';
import PropTypes from 'prop-types';

function Tasks(props) {
    const tasks = props.tasks;
    const listItems = tasks.map((task) =>
        <Task taskContent={task.text} />
    );
    return (
        <ul style = {{padding:'0px'}} className={styles.list_container}>{listItems}</ul>
    );
}

Tasks.propTypes = {
    tasks: PropTypes.object.isRequired
}

export default Tasks;
