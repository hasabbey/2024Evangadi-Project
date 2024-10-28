// import React, {useRef} from 'react'
// import axios from '../axiosConfig'
// import {Link, useNavigate} from 'react-router-dom'
// //import { response } from 'express'

// function Register() {

//   const navigate=useNavigate();    
//   const usernameDom = useRef()
//   const firstnameDom = useRef() 
//   const lastnameDom = useRef()
//   const emailDom = useRef()
//   const paswordDom = useRef()
  
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const usernamevalue=usernameDom.current.value;
//     const firstnamevalue=firstnameDom.current.value;
//     const lastnamevalue=lastnameDom.current.value;
//     const emailvalue= emailDom.current.value;
//     const passwordvalue=paswordDom.current.value;
//     // const cpasswordvalue=cpassswordDOM.current.value;
// if(!usernamevalue || !firstnamevalue ||!lastnamevalue || !emailvalue || !passwordvalue){
//   alert("please enter all required fields")
//   return;
// }
// try {
//   const response= await axios.post('user/register',{
//     username:usernamevalue,
//     firstname:firstnamevalue,
//     lastname:lastnamevalue,
//     email:emailvalue,
//     pasword:passwordvalue,
//     // c_password:cpasswordvalue
//   })
  
//   alert("registration sucessfully, please login")
//   navigate('/login');
  
// } catch (error) {
//   alert("something went wrong")
//   console.log(error);
  
// }
//   }
//     return (
//     <section className='mb-96 h-screen'>
//       <form onSubmit={handleSubmit}>
//     <div>
//       <span>username  </span>
//       <input name='username'
//       ref={usernameDom} 
//       type="text" 
//       placeholder='enter username' />
//     </div>
//     <br/>
//     <br/>
//     <div>
//     <span>firstname  </span>
//     <input name='firstname'
//     ref={firstnameDom} 
//     type="text" 
//     placeholder='enter firstname' />
//     </div>
//     <br/>
//     <br/>
//     <div>
//     <span>lastname  </span>
//     <input name='lastname'
//     ref={lastnameDom} 
//     type="text" 
//     placeholder='enter lastname' />
//     </div>
//     <br/>
//     <br/>
//     <div>
//       <span>email   </span>
//       <input name= 'email'
//       ref={emailDom} 
//       type="email"
//        placeholder='enter email' />
//     </div>
//     <br/>
//     <br/>
//     <div>
//       <span>pasword  </span>
//       <input name = 'pasword'
//       ref={paswordDom}
//       type="Password"
//        placeholder='enter password' />
//     </div>
//     <br/>
//     <br/> 
//     <button>Register</button>
//           </form>
//           <Link to ={'/login'}>Login</Link>
//     </section>
//   )
// }

// export default Register
