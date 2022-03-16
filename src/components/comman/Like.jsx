import React, { Component } from 'react'

class Like extends Component {

    render() {
        let heartClass = "fa fa-heart"
        if (!this.props.liked) {
            heartClass += "-o"
        }
        return (<i
            className={heartClass}
            aria-hidden="true"></i>
        );
    }
}

export default Like;