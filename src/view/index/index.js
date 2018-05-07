import React,{Component} from 'react';

import {Row,Col,Pagination} from "antd"

import IndexMenu from './indexMenu';
import IndexList from './list'
// let arr=[];
// for(let i=0;i<100;i++){
//   arr.push(<li>这是第{i}个li</li>)
// }
export default class Index extends Component{
    render(){
       let tab=this.props.match.params.id;
        return (
            <Row className="wrap">
            <Col md={6} xs={0}>
            <IndexMenu mode="vertical" className="indexNav"/>
            </Col>
            <Col md={0} xs={24}>
            <IndexMenu mode="horizontal" className="indexXsNav"/>
            </Col>
            <Col md={18} xs={24} className="indexlist">
           <IndexList tab={tab}/>
           <Pagination
            current={1}
            pageSize={10}
            total={50}
            onChange={(current)=>{
    console.log(current)
            }}
           />
            </Col>
            </Row>
        )

    }
} 