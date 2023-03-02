import React from 'react'

import UserItem from './UserItem'
import Card from '../../shared/components/UiElements/Card'


interface User {
  items: {
    id: number
    image: string
    name: string
    placesCount: number
  }[]
}

const UsersList = (props: User) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    )
  }

  return <ul className='users-list'>
    {props.items.map(user => (
      <UserItem
        key={user.id}
        id={user.id}
        image={user.image}
        name={user.name}
        placeCount={user.placesCount} />
    ))}
  </ul>

}


export default UsersList