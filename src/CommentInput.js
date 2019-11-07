import React, { Component } from 'react';
import './index.css'
import 'antd/dist/antd.css'
import {Input,Button} from 'antd'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            content:'' 
        }
        const { TextArea } = Input;
    }

    
    componentWillMount (){
        this._loadUsername()
    }
    
    render() { 
        return ( 
        <div className='input-area'>
            <div className='user'>
                <span className="user-name">用户名:</span>
                <div className="user-name-input">
                    <Input  
                    onBlur={this.handleUsernameBlur.bind(this)}   // 输入框失去焦点
                    value={this.state.username}
                    onChange={this.handleUsernameChange.bind(this)}
                    style={{width:'200px'}}
                    />
                </div>
            </div>
            <div>
                <span className="user-context">评论内容：</span>
                <div className="user-context-input">
                    <textarea 
                    value={this.state.content}
                    // onBlur={this.handleContentBlur.bind(this)}
                    onChange={this.handleUserContentChange.bind(this)}
                    ref={(textarea) =>this.textarea = textarea}
                    />
                </div>
            </div>
            <div className='comment-field-button'>
                <Button type="primary" onClick={this.commentSubmit.bind(this)}>发布</Button>
            </div>
        </div>
         );
    }
    // 赋值姓名
    componentDidMount() {
        this.textarea.focus()  //自动聚焦到评论框

    }
    // 刷新页面设置姓名框
    _loadUsername() {
        const username = localStorage.getItem('username')
        if(username) {
            this.setState({ username })
        }
        
    }
    
    // 存储姓名到localStorage
    _saveUserName(username) {
        localStorage.setItem('username', username)
    }
    
    
   
    // 姓名
    handleUsernameBlur(event){
        console.log(event.target.value)
        this._saveUserName(event.target.value)
    }
    
    handleUsernameChange(event) {
        this.setState(
            {
                username: event.target.value
            }
        )
        // console.log(this.state)
    }
    // 赋值评论
    handleUserContentChange(event){
        this.setState(
            {
                content:event.target.value
            }
        )
        console.log(this.state.content)
    }
    // 提交信息
    commentSubmit() {
        console.log(this.state.content,this.state.username)
        if(!this.state.username){
            return alert('请输入用户名')
        }
        if(!this.state.content){
            return alert('请输入评论内容')
        }
        if(this.state.username && this.state.content){
            if(this.props.onSubmit){
                const {username,content,dataTime} = this.state
                this.props.onSubmit({username,content,dataTime})
            }
            this.setState({
                content:'',
                username:'',
                dataTime: ''
        })
        }
        
    }
}
 
export default CommentInput;