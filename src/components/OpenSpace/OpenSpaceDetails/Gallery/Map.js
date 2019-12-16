import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const Map = (props) => {

    const {
    largeImage, mapImage, className
    } = props;


   
  
    const [modal, setModal] = useState(false);
    // const [modalOne, setModalOne] = useState(false);

    const toggle = () => setModal(!modal);
    // const toggle1 = () =>  setModalOne(!modalOne); 
    


    return (
        
        
        <>
        <div className="col-sm-4" >
          <figure onClick={toggle}>
            <img src={mapImage} alt="space image" />
          </figure>
        </div>
            
                    {/* <li data-toggle="modal" data-target="#assessment-popup" onClick={toggle}>
                        General Information Assessment
                        <i className="material-icons">chevron_right</i>
                    </li>
                   */}
           
      
            <Modal isOpen={modal} toggle={toggle} className={className}  centered ="true" size = "lg" zIndex="99999">
        <ModalHeader toggle={toggle}>  Maps
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div class="modal-body">
                        <img src ={largeImage} />
                    </div>
                </ModalBody>

            </Modal>
          
        </>
    )
}

export default Map;
