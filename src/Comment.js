import React, { Component } from 'react';
// import CommentList from './CommentList'
import './index.css'

class Comment extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="comment">
                <div className="comment-name">
                    <span className="comment-nam-span">{this.props.Comment.username}:</span>
                </div>
                <p className="comment-content">{this.props.Comment.content}</p>
            </div>
         );
    }
}
 
export default Comment;