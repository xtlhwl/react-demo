/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-13 10:09:54
 * @LastEditTime: 2019-09-15 22:03:02
 * @LastEditors: Please set LastEditors
 */

import React,{Component,Fragment} from 'react'
import './style.css'
import Xiaojiejielist from "./xiaojiejielist"

class  Xiaojiejie extends Component{
    constructor(props){
        super(props)

        this.state={
            inputValue:'',
            list:[
                "精油推背",
                "大保健",
                "推油"
            ]
        }
    }

    render(){
        return(
            <Fragment>
                    <div>
                        <input className="input" value={ this.state.inputValue } onChange={ this.changeValue.bind(this) }/>
                        <button onClick={this.addList.bind(this)} >新增</button>
                    </div>
                    <ul>
                        {
                            this.state.list.map((item,index) =>{
                            return (
                                // {/*
                                //     <li key={index+item} 
                                //         onClick={ this.deleteList.bind(this,index)}
                                //         // 显示输入的HTML标签
                                //         dangerouslySetInnerHTML={{__html:item}}
                                //     >
                               
                                //     </li>
                                // */}
                                // <div>
                                     <Xiaojiejielist
                                        content={item}
                                        key={index+item}
                                        index={index}
                                        deleteList={this.deleteList.bind(this)}
                                     />
                                // </div>
                               
                                
                            )
                            
                        })
                        }
                    </ul>
            </Fragment>
        )
    }
    //改变inputValue
    changeValue(e){
        this.setState({
            inputValue:e.target.value
        })
           
    }
    //新增list项
    addList(){
        // if(){
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue:""
            })
        // }
    }
    //删除List项 
    deleteList(index){
        //不准直接操作state数据，所以先局部操作，再赋值
        let list =this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie