import React,{Component} from 'react';
import {Avatar,Row,Col} from 'antd';
import data from './data';
import UserList from './userList'
export default class User extends Component{
    render(){
        console.log(data.data.recent_topics)
   let {avatar_url,loginname,create_at,score,recent_topics}=data.data;
        return (
            <div className="wrap">
            <Avatar src={avatar_url} className="userAvatar"/>
            <Row className="userInfo">
            <Col md={8}>
            用户名：<a href="">{loginname}</a>
            </Col>
            <Col md={8}>
            积分：<a>{score}</a>
            </Col>
            <Col md={8}>
            注册时间：<a>{create_at.split('T')[0]}</a>
            </Col>
            </Row>
            <UserList loading={false} title="最近创建的话题" data={recent_topics}/>
            </div>
        )

    }
} 