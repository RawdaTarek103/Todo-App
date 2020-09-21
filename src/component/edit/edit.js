import React from 'react';
import styles from './edit.module.css'
import Button from '../../component/button/button'

class Edit extends React.Component {
    render() {
        return (
            <div className={styles.edit_container}>
                <div className={styles.header}>
                    <p style={{ fontSize: '20px', marginTop: '8px' }}>Edit Todo</p>
                </div>
                <div className={styles.task_container}>
                    <p style={{ fontSize: '18spx', marginLeft: '5px', lineHeight:'7px' }}>
                        Task content
                    </p>
                    <textarea className={styles.task_content}>Hi</textarea>
                </div>
                <div className = {styles.btns}>
                    <Button
                        color='linear-gradient(rgba(22, 194, 208, .5),rgba(15, 123, 132, 1))'
                        title='Done'
                        onPress={() => { }} />

                    <Button
                        color='linear-gradient(rgba(217, 83, 79, .5),rgba(217, 83, 79, 1))'
                        title='Cancel'
                        onPress={() => { }} />
                </div>
            </div>
        );
    }
}

export default Edit;
