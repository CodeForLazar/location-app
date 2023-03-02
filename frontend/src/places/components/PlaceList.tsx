import { Link } from 'react-router-dom';

import Card from '../../shared/components/UiElements/Card';
import PlaceItem from './PlaceItem';

interface props {
   items: {
      id: string
      imageUrl: string
      title: string
      description: string
      address: string
      creator: string
      location: { lat: number, lng: number }
   }[]
}

const PlaceList = (props: props) => {

   if (props.items.length === 0) {
      return (
         <div className='place-list center'>
            <Card>
               <h2>No palces found. Maybe create one?</h2>
               <button>Share Place</button>
            </Card>
         </div>
      )
   }

   return (
      <ul className='place-list'>
         {props.items.map(place => (
            <PlaceItem key={place.id}
               id={place.id}
               image={place.imageUrl}
               title={place.title}
               description={place.description}
               address={place.address}
               creatorId={place.creator}
               coordinates={place.location}
            />
         ))}
      </ul>
   )
}

export default PlaceList