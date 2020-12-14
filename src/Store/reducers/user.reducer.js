
import {LOGIN} from '../actions/user.action'
import data from '../../Assets/data.json'
const creditials= {username: 'hruday@gmail.com', password: "hruday123"}
const initialState = {
  users: data,
  isAuthenticated: false
};


function userReducer(state= initialState, action) {
  switch (action.type) {
    
      case LOGIN: {
        // console.log(action.payload.email===creditials.username)
        if(action.payload.email===creditials.username && action.payload.password===creditials.password)
          return{...state,isAuthenticated: true}
        else 
          return state
      }
      
      default:{
        return state
      }
    
    }
}

export default userReducer