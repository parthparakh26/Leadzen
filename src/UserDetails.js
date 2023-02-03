import React from 'react'
import './userDetails.css'

const UserDetails = ({user}) => {
  return (
    <div className='collaspible--display'>
        <p className='user--details--description--title'>Description</p>
        <p className='user--details--title'>This is {user.name} of Analystt.ai. First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.</p>
        <div className='user-details'>
            <div>
                <p className='user--details--description--username'>User Name</p>
                <p className='user--details--username'>{user.username}</p>

                <p className='user--details--description--email'>Email</p>
                <p className='user--details--email'>{user.email}</p>

                <p className='user--details--description--companyname'>Company Name</p>
                <p className='user--details--companyname'>{user.company.name}</p>
            </div>
            <div>
                <p className='user--details--description--street'>Street</p>
                <p className='user--details--street'>{user.address.street}</p>

                <p className='user--details--description--city'>City</p>
                <p className='user--details--city'>{user.address.street}</p>

                <p className='user--details--description--zipcode'>Zipcode</p>
                <p className='user--details--zipcode'>{user.address.zipcode}</p>
            </div>
        </div>
    </div>
  )
}

export default UserDetails