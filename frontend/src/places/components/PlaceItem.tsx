import { useState } from 'react';

import Card from '../../shared/components/UiElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UiElements/Modal';
import Map from '../../shared/components/UiElements/Map';

interface PlaceItem {
   id: string
   image: string
   title: string
   description: string
   address: string
   creatorId: string
   coordinates: {}
}

const PlaceItem = (props: PlaceItem) => {

   const [showMap, setShowMap] = useState(false);
   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const openMap = () => {
      setShowMap(true);
   };

   const closeMap = () => {
      setShowMap(false);
   };

   const showDeleteWarning = () => {
      setShowConfirmModal(true)
   };

   const cancelDelete = () => {
      setShowConfirmModal(false)
   };

   const confirmlDelete = () => {
      console.log("deleting")
   };

   return (
      <>
         <Modal
            show={showMap}
            onCancel={closeMap}
            header={props.address}
            contentClass={"place-item__modal-content"}
            footerClass={"place-item__modal-actions"}
            footer={<Button onClick={closeMap}>CLOSE</Button>}>
            <div className='map-container'>
               <Map center={props.coordinates} zoom={16} />
            </div>
         </Modal>
         <Modal
            header="Are you sure?"
            footerClass='place-item_modal-actions'
            show={showConfirmModal}
            onCancel={cancelDelete}
            footer={<>
               <Button inverse onClick={cancelDelete}>CANCEL</Button>
               <Button danger onClick={confirmlDelete}>DELETE</Button>
            </>}
         >
            <p>Do you want to proceed with delition?</p>
         </Modal>
         <li className='place-item'>
            <Card className={"palce-item__content"}>
               <div className='place-item__image'>
                  <img src={props.image} alt={props.title} />
               </div>
               <div className='place-item__info'>
                  <h2>{props.title}</h2>
                  <h3>{props.address}</h3>
                  <p>{props.description}</p>
               </div>
               <div className='place-item__actions'>
                  <Button inverse onClick={openMap}>VIEW ON MAP</Button>
                  <Button to={`/places/${props.id}`}>EDIT</Button>
                  <Button danger onClick={showDeleteWarning}>DELETE</Button>
               </div>
            </Card>
         </li>
      </>
   )
}

export default PlaceItem