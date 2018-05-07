import React,{Component} from 'react';
import {Avatar,Row,Col} from 'antd';
import UserList from './userList'
import axios from 'axios';
import {connect} from 'react-redux'
class User extends Component{
    constructor(props){
        super(props)
        let loginname=this.props.match.params.id;
         this.getData(loginname)
    }
     getData(loginname){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'USER_UPDATA'
            });
            axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
            .then((res)=>{
                dispatch({
                    type:'USER_UPDATA_SUCC',
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:'USER_UPDATA_REEOR',
                })
            })
        })
     }
     shouldComponentUpdate(nextProps,nextState){
        let loginname=this.props.match.params.id;
        let nextloginname=nextProps.match.params.id;
        if(loginname!=nextloginname){
            this.getData(nextloginname);
            return false;
        }
        return true;
     }
   
    render(){
        console.log(this.props)
        let {loading,data} = this.props;
        let {avatar_url,loginname,create_at,score,recent_topics}=data;
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
            <UserList loading={loading} title="最近创建的话题" data={recent_topics}/>
            </div>
        )

    }
} 

export default connect(state=>state.user)(User)