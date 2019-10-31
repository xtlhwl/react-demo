/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2019-09-13 11:10:59
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Xiaojiejie from "./xiaojiejie"
import CommentApp from './CommentApp'

// ReactDOM.render(<Xiaojiejie />, document.getElementById('root'));
ReactDOM.render(<CommentApp/>,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
