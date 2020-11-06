import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

class Login extends Component {

    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                console.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div>
                <a href={"http://localhost:8080/oauth2/authorize/github?redirect_uri=http://localhost:3000/oauth2/redirect"}>Log in with Github</a>
            </div>
        );
    }
}

export default Login
