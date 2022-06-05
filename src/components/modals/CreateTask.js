import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from 'reactstrap';
import Api from './api';

const CreateTask = ({modal , toggle})  => {

    const HandleEnviar = async (e) => {
        e.preventDefault();
        alert(await (Api.Enviar(e.target.Titulo.value , e.target.Descricao.value , e.target.message.value)));
    }
    
    return(
        <>
           <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Create Task
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={HandleEnviar}>
                        <div className='form-group'>
                            <label>Task Name</label>
                            <input name='Titulo' type="text" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Task Description</label>
                            <textarea name='Descricao' rows="5" className='form-control'>

                            </textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button className="primary" onClick={toggle} type="submit">Add Task</Button>{' '}
                <Button className='secondary' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateTask;