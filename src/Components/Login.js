import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Dashboard from './Dashboard';
import { useSelector} from 'react-redux'
import {login} from './../Store/actions/user.action'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const isAuthenticated = useSelector(state=> state.users.isAuthenticated);
  const [error, setError] = useState(null)
  
  const formSubmit = (e) => {
    e.preventDefault()
    
    dispatch(login({email,password}))
    history.push('/dashboard')
  }
  if(isAuthenticated){
    history.push('/dashboard')
  }
  return (
    <div className="container w-25 mt-5">
      <form className="form-signin" onSubmit={formSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label className="sr-only ">Email address</label>
        <input type="email" className="form-control my-2" placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <label className="sr-only ">Password</label>
        <input type="password" className="form-control" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        
        {
          error &&
          <div className='text-danger float-left my-2'>{error}</div>
        }
        <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
      </form>
    </div>
  )
}
