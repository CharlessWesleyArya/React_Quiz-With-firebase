import {React,useContext} from 'react'
import UserContext from '../../context/userContext'
function SignUpPage() {
    var user=useContext(UserContext);
    console.log(user)
  return (
    <div>SignUpPage</div>
  )
}
export default SignUpPage