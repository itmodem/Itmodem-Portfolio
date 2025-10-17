import React from 'react'
import { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        )
    }
}
export default Welcome
