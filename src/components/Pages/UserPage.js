import React from 'react'
import UserPagePic from '../../assets/projects/UserPage.png'

const UserPage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      User Page
    </h1>
    <div className='pt-4'>
      <img src={UserPagePic} alt='login register page' />
      <div className='pt-4'>
        <p className='text-xl'>When logged in, 
        access your profile by <b>clicking on your name in the top right corner. </b>
        The profile page features a navbar with three sections: 'My account,' 'My bookings,' and 'My accommodations.'
In 'My account,' view your name, email, and <b>find a logout button. </b>
'My bookings' displays your booking history, total fees, and the number of nights booked. 
Clicking on a specific booking <b>redirects you to the location information page,</b> where you can explore 
all pictures, a short description, location details (linked to Google Maps), and <b>your booking information 
prominently displayed.</b>
Lastly, 'My accommodations' showcases all the accommodations you've uploaded. Here, 
you can <b>easily edit existing listings</b> or <b>upload new ones to enhance your hosting experience.</b>
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
            <p className='underline'><b>Logout in the backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.post('/logout', (request, response) => {
    response.cookie('token', '').json(true)
})`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/models/Booking.js' target='_blank'>
              <p className='underline'><b>Booking Information Schema</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`const bookingSchema = new mongoose.Schema({
    place: {type:mongoose.Schema.Types.ObjectId, required: true, ref:'Place'},
    user: {type: mongoose.Schema.Types.ObjectId, required: true},
    checkIn: {type:Date, required: true},
    checkOut: {type:Date, required: true},
    name: {type: String, required: true},
    mobile: {type: String, required: true},
    price: Number
})`}
          </code>
            </div>         
    </div>

          </div>
      </div>          
    </div>
  )
}

export default UserPage