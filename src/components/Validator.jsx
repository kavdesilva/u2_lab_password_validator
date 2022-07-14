import { useState } from 'react'
import '../styles/Validator.css'

const Validator = (props) => {

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          id="username" 
          onChange={props.clickUsername} 
          value={props.username} 
        />
        <label htmlFor="username">Username</label>

        <input 
          type="password" 
          placeholder="Password" 
          id="password" 
          onChange={props.clickPassword}
          value={props.password} 
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm" 
          onChange={props.clickPasswordConfirm}
          value={props.passwordConfirm} 
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={props.clickValid}>Sign Up</button>
        <button className="cancel" onClick={props.clearForm}>Clear Form</button>
        <p className="password-message">Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
