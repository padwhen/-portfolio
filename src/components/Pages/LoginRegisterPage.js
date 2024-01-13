import React from 'react'
import LoginRegisterPic from '../../assets/projects/LoginRegister.png'

const LoginRegisterPage = () => {
  return (
    <div>
    <h1 className='pt-4 text-3xl font-bold'>
      Login Page / Register Page
    </h1>
    <div className='pt-4'>
      <img src={LoginRegisterPic} alt='login register page' />
      <div className='pt-4'>
        <p className='text-xl'>If you have an account,
         you can log in. Upon successful login, you'll <b>be redirected to the index page with your name</b> 
         displayed in the top right corner. If the login is unsuccessful, <b>an alert</b> will notify you. 
         The server responds with a <b>422 code for incorrect username/password</b> and <b>a 404 if the connection to 
         the server fails. </b>Passwords are securely compared using <b>bcryptjs encryption.</b>
If you don't have an account, you can register by providing your name, password, and email. 
The password is <b>encrypted using bcryptjs before being stored in MongoDB</b>, ensuring a secure registration process.
        </p>
          <p className='text-3xl pt-2'><b>Some code highlight</b></p>
          <div className='grid grid-cols-2 gap-2 pt-2'>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
            <p className='underline'><b>Register in the backend</b></p>                    
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.post('/register', async (request, response) => {
const {name, email, password} = request.body
try {
const userDoc = await User.create({
  name, email, password:bcrypt.hashSync(password, bcryptSalt),
})
response.json(userDoc)        
} catch (e) { response.status(422).json(e)}
})`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/index.js' target='_blank'>
            <p className='underline'><b>Login in the backend</b></p>
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`app.post('/login', async (request, response) => {
const {email, password} = request.body
const userDoc = await User.findOne({email})
if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret, {}, (error, token) => 
{ if (error) throw error;
response.cookie('token',token).json(userDoc) })
} else {
response.status(422).json('password not ok')}
} else {
response.json('not found')}})
`}
          </code>
            </div>
            <div>
                <a href='https://github.com/padwhen/airbnb-clone/blob/main/api/models/User.js' target='_blank'>
                <p className='underline'><b>User Schema</b></p>        
                </a>
            <code style={{ whiteSpace: 'pre-wrap', padding: '8px', borderRadius: '4px' }}>
              {`const UserSchema = new Schema({
name: String,
email: {type: String, unique: true},
password: String
})`}
          </code>
            </div>         
    </div>

          </div>
      </div>          
    </div>
  )
}

export default LoginRegisterPage