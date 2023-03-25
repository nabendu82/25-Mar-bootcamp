import React, { Component } from 'react'

class ChildLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ChildLifecycle'
        }
        console.log('ChildLifecycle constructor');
    }

    componentDidMount(){
        console.log('ChildLifecycle componentDidMount')
    }

    componentDidUpdate(){
        console.log('ChildLifecycle componentDidUpdate')
    }

    render() {
        console.log('ChildLifecycle render');
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default ChildLifecycle