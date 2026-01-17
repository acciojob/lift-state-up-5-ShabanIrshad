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
        // console.log('clicked');
        this.setState({
            isLoggedin:!this.state.isLoggedin
        })
        
    }
    render(){
        return (<>
            <h1>Parent Component</h1>
            {this.state.isLoggedin? <h2>You are Logged In !</h2>:<Child isLoggedin={this.state.isLoggedin} toggle={this.toggle} />}
            
            </>
        );
    }
}