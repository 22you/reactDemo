import React,{Component} from 'react';
import {List,Avatar} from 'antd';
// import data from './data'
import {Link} from 'react-router-dom';
import TxtTag from '../txtTag';
import {connect} from 'react-redux';
import axios from 'axios';
 
 class IndexList extends Component{
     constructor(arg){
         super(arg);
         this.state={
             page:1,
         }
         this.getData(this.props.tab);
     }
     shouldComponentUpdate(nextProps,nextState){
         console.log(this.props.tab,nextProps.tab);
         if(this.props.tab!=nextProps.tab){
             this.getData(nextProps.tab);
             return false;
         }
         return true;
     }
     getData(tab){
         this.props.dispatch((dispatch)=>{
          axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
          .then((res)=>{
        //    console.log(res);
           dispatch({
               type:'LIST_UPDATA_SUCC',
               data:res.data
           })
          })
          .catch((error)=>{
              dispatch({
                  type:'LIST_UPDATA_REEOR',
                  data:error
              })
          })
         });
     }
    render(){
        let {loading,data}=this.props;
        //loading,data,tab,page
        return(
        <List loading={loading}
         dataSource={data}
         renderItem={item=>(<List.Item
          actions={["回复"+item.reply_count,"访问"+item.visit_count]}
          key={item.id}
         >
             <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={<div><TxtTag data={item}/><Link to={"/detail/"+item.id}>{item.title}</Link></div>}
              description={<p>
                  <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                  发表于：{item.create_at.split("T")[0]}
                  </p>}
             />
         </List.Item>)}>
        </List>
        )
    }
}

export default connect(state=>state.list)(IndexList)