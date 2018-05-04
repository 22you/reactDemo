import React,{Component} from "react";
import {Switch,Route,Redirect,HashRouter} from 'react-router-dom';
import Index from "../view/index/index"
import Book from "../view/book/index"
import User from "../view/user/index"
import Details from '../view/details/index'
import About from '../view/about'
export default class Router extends Component{
    render(){
        return(
            <Switch>
               <Route path="/" exact render={()=>(
                   <Redirect to="/index/all"/>
               )}/>
               <Route path="/index/:id" component={Index}/>
               <Route path="/book" component={Book}/>
               <Route path="/about" component={About}/>
               <Route path="/detail" component={Details}/>
               <Route path="/user" component={User}/>
            </Switch>
        )
    }
}