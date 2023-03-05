import React from 'react'

import UsersList from '../components/UserList';

const Users = () => {

   const USERS = [
      {
         id: "u1",
         name: "Max",
         image: "https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80",
         placesCount: 5
      }
   ];

   return (
      <UsersList items={USERS} />
   )
}

export default Users