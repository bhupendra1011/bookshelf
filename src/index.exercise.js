// 🐨 you'll need to import React and ReactDOM up here

import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog, DialogOverlay, DialogContent} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {Logo} from 'components/logo'
import LoginForm from 'components/LoginForm'

// 🐨 you'll also need to import the Logo component from './components/logo'

function App() {
  const [openModal, setOpenModal] = React.useState(null)
  const close = () => setOpenModal(null)
  const handleSubmit = formData => {
    console.log(formData)
  }
  return (
    <div>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog
        aria-label="login-form"
        isOpen={openModal === 'login'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p> login</p>
        <LoginForm buttonText="Login" onSubmit={handleSubmit} />
      </Dialog>
      <Dialog
        aria-label="register-form"
        isOpen={openModal === 'register'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p> register</p>
        <LoginForm buttonText="Register" onSubmit={handleSubmit} />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
