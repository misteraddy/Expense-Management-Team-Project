import React,{useState} from "react"

 
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import {registerNewUser} from '../../Services/LoginService';
 
 const RegisterUser = () => {

    const [expenseUser, setExpenseUser] = useState({
            username:"",
            password:"",
            email:"",
            category:"",
    });

    const [password2, setPassword2] = useState("");
    let navigate = useNavigate();
    
    const saveNewUser = (event) => {
        event.preventDefault();
        if(expenseUser.password.length<5 || expenseUser.password.length>10){
            alert("Password must be between 5 to 10 characters long");
            return;
        }
       if(expenseUser.password===password2){
             registerNewUser(expenseUser).then((respose)=>{
               alert("User is registered successfully...Go For Login");
               navigate('/');    
             });
        }
        else{
             alert("Passwords are not matched");
            return;
        }
      };    

      const  onChangeHandler = (event) =>{
        event.persist();
        const name = event.target.name;
            const value = event.target.value;
           setExpenseUser(values =>({...values, [name]: value }));
        };
     

      return(
        <div>
            <br/>
            <div className = ".container">
                <div className = "row">
                    <div className = "card col-md-2 offset-md-3 offset-md-3">
                        <div className = "login-box">
                            <h2 className="text-center"><u>New User Registration</u> </h2>
                            <br/>
                            <form  method="post">
                                <div className = "form-group">
                                    <label>User Name: </label>
                                    <input placeholder="username" name="username" className="form-control"
                                        value={expenseUser.username} onChange={(event) => onChangeHandler(event)} />
                                </div>
                                <div className = "form-group">
                                    <label>Password: </label>
                                    <input type="password"   name="password" className="form-control"
                                    value={expenseUser.password} onChange={(event) => onChangeHandler(event)}/>
                                </div>
                                <div className = "form-group">
                                    <label>Retype/Confirm Password: </label>
                                    <input type="password"   name="password2" className="form-control"
                                    value={password2} onChange={(event) =>setPassword2(event.target.value)}/>
                                </div>
                                <div className = "form-group">
                                    <label>User Email: </label>
                                    <input placeholder="email" name="email" className="form-control"
                                    value={expenseUser.email} onChange={(event) => onChangeHandler(event)} />
                                </div>
                                <div className = "form-group">
                                    <label>Select Category : </label>
                                    <input list="types"  name="category" className="form-control"
                                    value={expenseUser.category} onChange={(event) => onChangeHandler(event)} />
                                    <datalist id="types">
                                      <option value="Customer"/>
                                    <option value="Admin"/>
                                   </datalist>
                                </div>
                                <br/>
                                <button className='btn btn-primary' onClick={ (e) => saveNewUser(e)}>Submit</button>
                            </form>
                        </div>
                 </div>
            </div>
       </div>
    </div>    
      );
 }
 
 export default RegisterUser;