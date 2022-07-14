import {useState} from 'react'
import Validator from "./components/Validator"

const App = () => {

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirm, setPasswordConfirm] = useState('')
  let [valid, setValid] = useState(false)

  const clickUsername = (event) => {
    setUsername(event.target.value)
  }

  const clickPassword = (event) => {
    setPassword(event.target.value)
  }

  const clickPasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value)
  }

  const clickValid = (event) => {
    event.preventDefault()
    if (password === passwordConfirm){
      setValid(true)
      console.log(valid)
    } else {
      setValid(false)
      console.log(valid)
    }
  }

  const clearForm = () => {
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
  }

  return (
    <Validator clickValid={clickValid}  
               username={username} 
               password={password} 
               passwordConfirm={passwordConfirm}  
               clickUsername={clickUsername} 
               clickPassword={clickPassword} 
               clickPasswordConfirm={clickPasswordConfirm}
               clearForm={clearForm} />
  )
}

export default App
