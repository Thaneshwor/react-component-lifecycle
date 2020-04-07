import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }

    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

export default Lifecycle;