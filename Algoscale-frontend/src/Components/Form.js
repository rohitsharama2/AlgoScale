import React, {useState , useEffect} from 'react'
import secureAxios from './secureAxios'
import {Link} from 'react-router-dom'


function Form(props) {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [message , setMessage]= useState('')
    const all={name, lname,email,message}
    
    const insertArticle = () =>{
        secureAxios.post("contacts/" ,all)
        .then(resp =>console.log(resp))
    }

    return (
        <div>
            <div> <Link to={"/Home"}>Home</Link></div>
            <div><Link to={"/contactUs"}>Contact Us</Link></div>
            <div> <Link to={"/analytics"}>Analytics</Link></div>
            <div>
                <h1 style={{textAlign:"center"}}>Contact Us</h1>
                <label htmlFor = "name" className = "form-label">Name</label>
                <input type="text" className = "form-control" id="name" placeholder="please enter the name"
                 value = {name} onChange = {e => setName(e.target.value)}/>  
                <br/>
                <label htmlFor = "lname" className = "form-label">Last Name</label>
                <input type="text" className = "form-control" id="lname" placeholder="please enter the last name"
                 value = {lname} onChange = {e => setLname(e.target.value)}/>  
                <br/>
                <label htmlFor = "lname" className = "form-label">Email</label>
                <input type="email" className = "form-control" id="email" placeholder="please enter the email"
                 value = {email} onChange = {e => setEmail(e.target.value)}/>  
                <br/>
                <label htmlFor = "lname" className = "form-label">Message</label>
                <input type="textArea" className = "form-control" id="message" placeholder="please enter your message"
                 value = {message} onChange = {e => setMessage(e.target.value)}/>  
                <br/>
                <button onClick = {insertArticle} className="btn btn-success">Submit</button>        
            </div>
           
        </div>
    )
}

export default Form