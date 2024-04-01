import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
  const {name} = useParams();
  return (
    <div>Profile of {name}</div>
  )
}

export default Profile