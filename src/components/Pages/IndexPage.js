import React from 'react'
import IndexPagePic from '../../assets/projects/Airbnb.png'

const IndexPage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      Index Page
    </h1>
    <div className='pt-4'>
      <img src={IndexPagePic} alt='index page' />
      <div className='pt-4'>
        <p className='text-xl'>
            As you kick off your journey on our platform, 
            you'll be met with an assortment of appealing locations, 
            each accompanied by brief descriptions and nightly rates <b>sourced directly from MongoDB. </b>
            The cool part? Add a new spot, and it <b>pops up instantly on the main page. </b>
            If you're already logged in, <b>your name will be displayed</b> in the top right corner. 
            <b>User data</b>, fetched from MongoDB, is <b>not only saved in the userContext</b> but also 
            <b> stored as cookies</b> in the web application. This ensures that even when the browser is refreshed, 
            you won't be automatically logged out. Looking to share your place? Just hit 'Airbnb your home' or, 
            if you're not logged in, hop over to the 'Register' page. It's all about making things straightforward, 
            whether you're exploring accommodations or ready to open your doors to guests.
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
            <p className='underline'><b>Fetching user data from backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`useEffect(() => {
if (!user) {
const { data } = axios.get('/profile').then(({ data }) => {
  setUser(data);});
}
}, [])`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/pages/IndexPage.jsx' target='_blank'>
            <p className='underline'><b>If the user is not logged in, will redirect to register</b></p>
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`<Link to={user ? '/account/places/new' : '/login'}>
Airbnb your home
</Link>
{!!user && (
<div>
{user.name}
</div>
)}
`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
              <p className='underline'><b>Fetching places from the backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`const [places, setPlaces] = useState([])
useEffect(() => { 
    axios.get('/places').then(response => {
        setPlaces([...response.data])
    })
}, [])`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/pages/IndexPage.jsx' target='_blank'>
<p className='underline'><b>Displaying all the places with the fetched data</b></p>
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`{places.length > 0 && places.map(place => (
<Link to={'/places/'+place._id}>
{place.photos?.[0] && (
  <img src={'/uploads/'+place.photos?.[0]} alt="" />)}
    <h2>{place.address}</h2>
    <h3>{place.title}</h3>
    <span>{place.price}</span> per night 
</Link>`}
          </code>
            </div>          
    </div>

          </div>
      </div>          
    </div>
  )
}

export default IndexPage