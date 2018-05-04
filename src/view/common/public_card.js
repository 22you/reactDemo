import React,{Component} from 'react';
import {Card} from 'antd';
export default class Public_Card extends Component{
  render(){
      let {data} =this.props;
      return (<div className="wrap">
      {/* <Card title="nodejs入门" loading={false} type="inner">
       <div
        dangerouslySetInnerHTML={{
            __html:data[0].content
        }}
       ></div>
      </Card> */}
      {data.map((item,index)=>(
      <Card title={item.title} type="inner" key={index}>
       <div dangerouslySetInnerHTML={{__html:item.content}}></div>
      </Card>))}
    </div>)
  }
}