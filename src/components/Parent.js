import React from 'react';
import Child from './Child';

export default class Parent extends React.Component{
    constructor(props){
        super();
        this.state={
            isLoggedin:false
        }
    }
    toggle=(e)=>{
        e.preventDefault();
        
        this.setState({
            isLoggedin:!this.state.isLoggedin
        })
        console.log(this.state.isLoggedin);
    }
    render(){
        return (<>
            <h1>Parent Component</h1>
            <Child isLoggedin={this.state.isLoggedin} toggle={this.toggle} />
            </>
        );
    }
}