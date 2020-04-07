import React, { Component } from 'react'

class LifecycleUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favoritecolor: "red"
        }
    }

    //This is the first method that is called when a component gets updated.
    // static getDerivedStateFromProps(props, state) {
    //     return { favoritecolor: props.favcol };
    // }

    // In the shouldComponentUpdate() method you can return a 
    //Boolean value that specifies whether React should continue with the rendering or not.
    // shouldComponentUpdate() {
    //     return true;
    // }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 3000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        return null;
    }

    // changeColor = () => {
    //     this.setState({ favoritecolor: "blue" });
    // }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                {/* <button type='button' onClick={this.changeColor}>Change Color</button> */}

            </div>
        )
    }
}

export default LifecycleUpdate
