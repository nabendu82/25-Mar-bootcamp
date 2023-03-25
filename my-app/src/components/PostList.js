import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts });
    }

    render() {
        return (
            <>
                <h1>Post List</h1>
                {this.state.posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
            </>
        )
    }
}

export default PostList