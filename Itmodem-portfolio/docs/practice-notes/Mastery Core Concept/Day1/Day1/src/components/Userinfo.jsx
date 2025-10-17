import React, { Component } from 'react';

class Userinfo extends Component {
    render() {
        return <div>
            <h1>Hello {this.props.name}</h1>
            <h2>You are {this.props.age} year old and </h2>
            <h3>You are from {this.props.country}.</h3>
        </div>
    }
}

export default Userinfo;