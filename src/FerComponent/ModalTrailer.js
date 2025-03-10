import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalTrailer({ LinkTrailer }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button className='btn btn-danger' onClick={ handleShow }>
                Trailer
            </button>
            <Modal size='lg' show={ show } onHide={ handleClose }>
               
                <Modal.Body style={ { maxHeight: "600px", overflow: "auto", backgroundColor:'black' } }>
                    <iframe width="100%" height="400" src={LinkTrailer} title="" frameborder="0" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default ModalTrailer