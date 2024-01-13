import React from 'react'
import UpdatePagePic from '../../assets/projects/UpdatePage.png'

const UpdatePage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      Update existing place
    </h1>
    <div className='pt-4'>
      <img src={UpdatePagePic} alt='login register page' />
      <div className='pt-4'>
        <p className='text-xl'>In the update page, 
        you have the <b>flexibility to modify any aspect</b>, from the title and pictures to 
        the perks of a place. <b>Utilizing useParams()</b>, the page extracts the place ID, 
        and <b>useEffect is employed to fetch and update</b> the corresponding data when the ID is valid.
When saving changes, the system <b>verifies the validity of the ID</b>. If valid, the data is <b>updated 
using axios.put.</b> If the ID is <b>invalid, a new entry is created with axios.post</b>. This streamlined 
process ensures hassle-free updates or additions to your listings.
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/pages/PlacesFormPage.jsx' target='_blank'>
                               <p className='underline'><b>Fetching the data by the id get by useParams()</b></p> 
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`useEffect(() => {
        if (!id) {
            return; }
        axios.get('/places/'+id)
        .then(response => {
            const {data} = response;
            setTitle(data.title)
            setAddress(data.address)
        })
    }, [id])`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/client/src/pages/PlacesFormPage.jsx' target='_blank'>
              <p className='underline'><b>Saving place function</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`async function savePlace(event) {
    event.preventDefault();
    const placeData = {
        title, address, addedPhotos, 
        description, perks, extraInfo, checkIn, 
        checkOut, maxGuests, price }
    if (id) {
            await axios.put('/places', {
                id, ...placeData });
    } else {
    await axios.post('/places', placeData)}}`}
          </code>
            </div>         
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
              <p className='underline'><b>GET Place in Backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.get('/places/:id', async (request, response) => {
    const {id} = request.params
    response.json(await Place.findById(id))
})`}
          </code>
            </div>         
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
              <p className='underline'><b>PUT place in Backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.put('/places', async (request, response) => {
const {token} = request.cookies;
const {id, title, address, addedPhotos, 
    description, perks, extraInfo, checkIn, checkOut, maxGuests, price} = request.body;
jwt.verify(token, jwtSecret, {}, async (error, userData) => {
if (error) throw error;
const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
    placeDoc.set({
        title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, 
        checkOut, maxGuests, price})
        await placeDoc.save()
        response.json('ok')}})})`}
          </code>
            </div>         
    </div>

          </div>
      </div>          
    </div>
  )
}

export default UpdatePage