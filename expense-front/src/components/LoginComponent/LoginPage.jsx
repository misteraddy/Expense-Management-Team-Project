import React,{useState} from "react"

import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import {validateUser} from '../../Services/LoginService';


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const checkLogin=(e)=>{
        e.preventDefault();
         validateUser(username,password).then((response)=>{
         let category=String(response.data);
          if(category==="Admin")
              navigate('/AdminMenu');
        else if(category==="Customer")
             navigate('/CustomerMenu');
        else
           alert("Wrong Userid/Password");
        });
    }

    const registerNewUser=(e)=>{
        navigate('/Register');
    }

    return (
        <div>
        <br/>
         <div className = ".container">
               <div className = "row">
                  <div className = "card col-md-2 offset-md-3 offset-md-3">
                     <div className = "login-box">
                      <h2 className="text-center"><u>Login Page</u></h2>
                         <br/>
                         <form  method="get">
                              <div className = "form-group">
                                   <label>User Name: </label>
                                  <input placeholder="username" name="username" className="form-control"
                                      value={username} onChange={(e) => setUsername(e.target.value)} />
                              </div>
                              <div className = "form-group">
                                  <label>Password: </label>
                                  <input type="password"   name="password" className="form-control"
                                      value={password} onChange={(e) => setPassword(e.target.value)}/>
                              </div>
                              <br/>
                              <button className='btn btn-primary' onClick={ (e) => checkLogin(e)}>Submit</button>
                          </form>
                          <div>
                          <h2 size="5" color='yellow'/>
                         <br/>
                       <button className='btn btn-info' onClick={ (e) => registerNewUser(e)}>Register New User</button>
                      </div>
                      </div>
                   </div>
              </div>
          </div>
    </div>
    );
}

export default LoginPage;