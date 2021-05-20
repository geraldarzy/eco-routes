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
                    <label for='email'>Email:</label>
                    <input type='text' id='email'></input>
                    <br/>
                    <label for='email'>Password:</label>
                    <input type='text' id='password'></input>
                    <br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default UserSignIn;
