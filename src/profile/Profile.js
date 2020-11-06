import React, { Component } from 'react';
import jwt_decode from "jwt-decode";

class MyAppChild extends Component {
    render() {
        console.log(this.props.label);
        return <span>{this.props.label + " - " + this.props.value}</span>;
    }
}

class Profile extends Component {

    constructor(props) {
        super(props);

        this.decodedJwt = jwt_decode(this.props.encodedJwt);

    }

    render() {
        var decodedJwt = this.decodedJwt;
        return <div>{JSON.stringify(decodedJwt.login).replace(/['"]+/g, '')}</div>;
    }
}



export default Profile