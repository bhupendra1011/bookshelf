import React from 'react'

function LoginForm({onSubmit, buttonText}) {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(`${buttonText}:${userName} -- ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          UserName
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

export default LoginForm
