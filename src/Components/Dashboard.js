import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'



export default function Dashboard() {

  const dispatch = useDispatch();
  const users = useSelector(state=> state.users.users)
  const isAuthenticated = useSelector(state=> state.users.isAuthenticated)
  const history = useHistory();
  const dataItems= users.map((user)=>
  <tr key={user.id}>
    <th scope="row">{user.id}</th>
    <td>{user.name}</td>
    <td>{user.age}</td>
    <td>{user.gender}</td>
    <td>{user.email}</td>
    <td>{user.phoneNo}</td>
  </tr>)
  if(!isAuthenticated){
    history.push(`/login`);
  }
  return (
    <div className="container">
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
        </tr>
      </thead>
      <tbody>
        {dataItems}
      </tbody>
    </table>
    </div>
  )
}
