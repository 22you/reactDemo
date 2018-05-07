import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import {Menu} from 'antd'
const data=[
    {
        tab:'all',
        txt:'全部'
    },
    {
        tab:'good',
        txt:'精华'
    },
    {
        tab:'ask',
        txt:'问答'
    },
    {
        tab:'share',
        txt:'分享'
    },
    {
        tab:'job',
        txt:'招聘'
    },
    {
        tab:'dev',
        txt:'测试'
    }
]
 class IndexMenu extends Component{
    constructor(arg){
      super(arg)
      let now=this.getNow(this.props.location)
      this.state={
         
          now:now
      }
      
    }
    getNow(location){
      let now=location.pathname.split('/')[2];
      return now;
    }
    shouldComponentUpdate(nextProps){
      let now=nextProps.location.pathname.split('/')[2];
      if(now!==this.state.now){
          this.setState({
              now:now
          })
        return false
      }
      return true
    }
    render(){
        return(
            <Menu className={this.props.className} mode={this.props.mode} selectedKeys={[this.state.now]}>
              {data.map((item)=>{
                  return    
                  <Menu.Item key={item.tab}>
                  <Link to={"/index/"+item.tab}>{item.txt}</Link>
                 </Menu.Item>
              })}
               
            </Menu>
        )
    }
}
export default withRouter((props)=>{
 let {mode,className,location}=props;
 return <IndexMenu mode={mode} className={className} location={location}/>
})