import React,{Component} from 'react';
import data from './data';
import Public_Card from '../common/public_card'
// import {Card} from 'antd'
export default class Book extends Component{
    render(){
        return <Public_Card data={data}/>

    }
} 