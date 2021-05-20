import React from 'react';

class UserSignIn extends React.Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        let email = e.target.children.email.value;
        let password = e.target.children.password.value;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='email' placeholder='Email'></input>
                    <br/>
                    <input type='password' id='password' placeholder='Password'></input>
                    <br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default UserSignIn;
