import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments:[]
    }
    render() { 
        
        return ( 
        <div>
            {
                this.props.comments.map((comment,i) => 
                < Comment Comment={comment} cancel={this.cancel.bind(this)} key={i} />
                )
            }
        </div>
         );
    }
    
    cancel(i){
        this.props.cancel(i)
    }
}
 
export default CommentList;