import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import TxtTag from '../txtTag'
import data from './data';
import ReplyList from './replyList'
import TxtDetails from './txtDetails';
export default class Details extends Component{
    render(){
        console.log(data.data.replies)
       
        return  (<div className="wrap">
        <TxtDetails loading={false} data={data.data}/>
        <ReplyList loading={false} replies={data.data.replies} replyCount={data.data.reply_count}/>
        </div>);

    }
} 