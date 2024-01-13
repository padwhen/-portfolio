import React from 'react'
import BookingPagePic from '../../assets/projects/BookingPage.png'

const BookingPage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      Booking Page
    </h1>
    <div className='pt-4'>
      <img src={BookingPagePic} alt='login register page' />
      <div className='pt-4'>
        <p className='text-xl'>In the booking page, <b>all pertinent 
        information</b> about the place <b>is readily available.</b> 
        In the pictures section, the 'See all pictures' option 
        allows you to zoom in for a closer look. To make a reservation, 
        choose the desired number of nights (with a minimum of 2). 
        <b>Your name is automatically set</b> in the 'Your full name' section, 
        but you have the flexibility to make changes. It's important to note 
        that bookings <b>can only be made when logged in.</b>
Upon completing a booking, <b>a record of it can be viewed</b> in the 
<b>'My bookings' section</b> within your profile, as previously mentioned. 
This seamless process ensures a user-friendly experience while managing your reservations.
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a target='_blank' href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/pages/BookingPage.jsx'>
            <p className='underline'><b>Get booking information with useEffect()</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`const {id} = useParams()
    const [booking, setBooking] = useState(null)
    useEffect(() => {
    if (id) {
    axios.get('/bookings').then(response => {
    const foundBooking = response.data.find(({_id}) => _id === id)
    if (foundBooking) { setBooking(foundBooking) }})}}, [id])
`}
          </code>
            </div>
            <div>
            <a target='_blank' href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/BookingWidget.jsx'>
              <p className='underline'><b>Function book this page</b></p>
</a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`async function bookThisPlace() {
    const response = await axios.post('/booking', {checkIn, checkOut, 
    numberOfGuests, name, mobile, place: place._id,
    price:place.price * calculateTime() })
    const bookingId = response.data._id;
    setRedirect(/account/bookings/bookingId)
    }`}
          </code>
            </div>         
    </div>

          </div>
      </div>          
    </div>
  )
}

export default BookingPage