import React from 'react';

export default class Child extends React.Component{
    render(){
        console.log(this.props);
        return (
            <>
             <form onSubmit={this.props.toggle}>
                <label>Username : </label>
                <input type="text" name="username" id='username'/><br/><br/>
                <label>Password :</label>
                <input type="password" name="password" id='password'/><br/><br/>
                <input type="submit" value="Login"/>
             </form>
            </>
        );
    }
}