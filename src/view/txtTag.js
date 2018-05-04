import React,{Component} from 'react';
import {Tag} from 'antd';
const tab={
    good:{
        color:'magenta',
        txt:'精华'
    },
    top:{
        color:'geekblue',
        txt:'置顶'
    },
    job:{
        color:'cyan',
        txt:'招聘'
    },
    ask:{
        color:'purple',
        txt:'问答'
    },
    share:{
        color:'purple',
        txt:'分享'
    },
    dev:{
        color:'purple',
        txt:'测试'
    }
}
const getTab=(data)=>{
    return (data.top?"top":data.good?"good":data.tab)
}
export default class TxtTag extends Component{
    render(){
        let nowTab=tab[getTab(this.props.data)]
        return(<Tag color={nowTab.color}>{nowTab.txt}</Tag>);
    }
}