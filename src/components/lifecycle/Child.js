import React, { Component } from 'react'

class Child extends Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default Child
