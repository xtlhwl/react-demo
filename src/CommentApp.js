import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'
class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments:[]
        }
    }
    componentWillMount(){
        console.log('即将挂载上DOM')
        this._loadContent()
    }
    render() { 
        console.log('渲染DOM元素')
        return ( 
        <div className="wrapper">
            <CommentInput 
                onSubmit={this.handleSubmitComment.bind(this)}
            />
            <CommentList 
                comments= {this.state.comments}
            />
        </div>
         );
    }

    _loadContent() {
        let comments = localStorage.getItem('comments')

        if(comments){
            comments = JSON.parse(comments)
            this.setState({
                comments
            })
        }
        console.log(comments,'数据')
    }
    _saveContent(comments) {
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    componentDidMount(){
        console.log('挂载完成')
    }
    handleSubmitComment(comment){
        console.log(comment,'suppr')
        this.state.comments.push(comment)  // 讲评论用户信息存入comments
        this.setState({
            comments:this.state.comments
        })
        this._saveContent(this.state.comments)
    }
}
 
export default CommentApp;