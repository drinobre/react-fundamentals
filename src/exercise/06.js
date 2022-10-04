import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  function handleSubmit(event){
    event.preventDefault(); //to prevent the default behavior of form submit events (which refreshes the page).
    const value = (event.target.elements.usernameInput.value)
    console.dir(event.target)
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id="usernameInput" type="text"/>
      </div>
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
