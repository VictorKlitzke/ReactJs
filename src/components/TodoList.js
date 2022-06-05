import React , {useState} from 'react'
import './TodoList.css';

import CreateTask from './modals/CreateTask';

const TodoList = () => {

const [modal , Setmodal] = useState(false);

    const toggle = () => {
        Setmodal(!modal);
    }

        return(
        <>
            <div className='header '>
                <h3>TodoList</h3>
                <button className="btn btn-primary" onClick={() => Setmodal(true)}>Create TaskList</button>
            </div>
            <div className="task-container"></div>
            <CreateTask toggle={toggle} modal={modal}/>
        </>
        )
}

export default TodoList; 