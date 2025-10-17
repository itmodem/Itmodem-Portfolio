import React from 'react'
import { Component } from 'react'
class UserInfo extends Component {
    render () {
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <h1>Age,{this.props.age}</h1>
            </div>
        )
    }
}
export default UserInfo
