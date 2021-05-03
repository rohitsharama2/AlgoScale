import React from 'react'
import {useState , useEffect} from 'react'
import secureAxios from './secureAxios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


export default function Home(props){
    const [contact ,setcontact]= useState([])

    useEffect( ()=>{
        secureAxios.get("contacts/")
        .then(resp=>{setcontact(resp.data)})
        .catch( err=>console.log(err))
    }
    ,[])

    return(
        <div>
            <h1>AlgoScale</h1>
            <div> <Link to={"/Home"}>Home</Link></div>
            <div><Link to={"/contactUs"}>Contact Us</Link></div>
            <div> <Link to={"/analytics"}>Analytics</Link></div>
            <div>
                {contact.map(i =>{ return (  
            <Card className="float-left" style={{ width: '18rem' }} >
                <Card.Img variant="top" src=""/>
                <Card.Body>
                <Card.Title> </Card.Title>
                <Card.Text>
                {i.name}
                </Card.Text>
                <Button variant="primary">Customer Name</Button>
                </Card.Body>
            </Card>
                )})}
            </div>
        </div>

    )
}

