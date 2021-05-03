import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    constructor(props){
        super(props)
    }

  render() {

    const responseFacebook = (response) => {
        this.props.history.push("/contactUs")
      console.log(this.props);
      
    }

    const responseGoogle = (response) => {
        this.props.history.push("/contactUs")
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="1730898480433755" 
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="248633782942-qft345ei230b5atjlch6tgrcgco50hiu.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default Login;