/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-13 11:42:49
 * @LastEditTime: 2019-09-15 22:03:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import PropType from  'prop-types'

class Xiaojiejielist extends Component {
    constructor(props){
        super(props)
        this.deleteLi=this.deleteLi.bind(this)
    }
    // componentWillUnmount(){
    //     console.log('已卸载该组件')
    // }
    // componentWillMount(){
    //     console.log('子s组件被调用')
    // }
    // shouldComponentUpdate(){
    //     return false
    // }
    shouldComponentUpdate(){
        console.log('阻止子组件更新')
        return false
    }
    render() { 
        console.log('子组件渲染')
        return ( 
            <li onClick={this.deleteLi}>{this.props.content}</li>
         );
    }
    //删除list
    deleteLi(){
        // 单向数据流，将父组件的方法传到子组件，子组件调用属性
        this.props.deleteList(this.props.index)
    }
}
//propType校验值
Xiaojiejielist.PropType = {
    content:PropType.string,
    index:PropType.number,
    deleteList:PropType.func
}

export default Xiaojiejielist;