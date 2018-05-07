import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import TxtTag from '../txtTag'
import ReplyList from './replyList'
import TxtDetails from './txtDetails';
import {connect} from 'react-redux'
import axios from 'axios';
class Details extends Component{
    constructor(arg){
        super(arg)
        let id=this.props.match.params.id;
        
        this.getData(id);
    }

   getData(id){
      
       this.props.dispatch((dispatch)=>{
         dispatch({
             type:'DETAILS_UPDATA'
         })
         axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
         .then((res)=>{
           dispatch({
               type:'DETAILS_UPDATA_SUCC',
               data:res.data
           })
         })
         .catch((error)=>{
             dispatch({
                 type:'DETAILS_UPDATA_ERROR',
                 data:error.data
             })
         })
       })
   }
    render(){
       console.log("传入的属性为:",this.props)
       let {loading,data} =this.props;
        return  (<div className="wrap">
        <TxtDetails 
        loading={loading} 
        data={data}
        />

        <ReplyList 
        loading={loading} 
        replies={data.replies} replyCount={data.reply_count}/>
        </div>);

    }
} 
export default connect(state=>state.details)(Details)