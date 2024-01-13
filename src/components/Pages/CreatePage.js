import React from 'react'
import CreatePagePic from '../../assets/projects/CreatePage.png'

const CreatePage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      Creating place
    </h1>
    <div className='pt-4'>
      <img src={CreatePagePic} alt='login register page' />
      <div className='pt-4'>
        <p className='text-xl'>On this page, 
        you have the opportunity to <b>craft an enticing 
        listing for your place.</b> The title, location, and a 
        brief description will be showcased on the index page, 
        emphasizing brevity and allure. Enhance your listing by <b>adding pictures 
        through links</b> or <b>direct uploads from your device. </b>The images are <b>stored as 
        links in an array</b>, ensuring accessibility throughout the platform.
For listings with more than two pictures, you can <b>select the featured image </b>
for the index page. If no choice is made, <b>the default will be the first picture </b>
uploaded. Additionally, provide perks, a more detailed description, check-in and 
check-out times, maximum guest capacity, and the nightly rate.Clicking 'save' 
at the end of the page <b>saves the data to MongoDB</b> and seamlessly <b>redirects you to the 
index page,</b> allowing you to admire and manage your new listing
Lastly, <b>'My accommodations' showcases all the accommodations</b> you've uploaded. 
Here, you can easily edit existing listings or upload new ones to enhance your 
hosting experience.
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a target='_blank' href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js'>
            <p className='underline'><b>Upload by link in the backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.post('/upload-by-link', async (request, response) => {
    const {link} = request.body;
    const newName = 'photo' + Date.now() + '.jpg'
    const destPath = path.join(__dirname, 'uploads', newName);
    await imageDownloader.image({
        url: link,
        dest: destPath });
    response.json(newName)
})`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
              <p className='underline'><b>POST in the backend</b></p>                    
                </a>

            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.post('/places', async (request, response) => {
const {token} = request.cookies;
const {title, address, addedPhotos, 
    description, perks, extraInfo, checkIn, checkOut, maxGuests, price} = request.body;
    jwt.verify(token, jwtSecret, {}, async (error, userData) => {
    if (error) throw error;
    const placeDoc = await Place.create({
        owner: userData.id,
        title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price})
        response.json(placeDoc)})})
`}
          </code>
            </div>         
    </div>

          </div>
      </div>          
    </div>
  )
}

export default CreatePage