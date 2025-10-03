import React, { use, useEffect } from 'react'

const Profile = ({username}) => {
       useEffect( () => {
        document.title = `${username}'s Profile`
       }, [username])
  return (
    <div>
        <h2>Welcome, {username}</h2>
    </div>
  )
}

export default Profile