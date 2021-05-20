import React from 'react';

class UserSignUp extends React.Component{

    //signIn/Up flow
    //user fills out form, submits form to backend, backend sends token or error

    handleSubmit=(e)=>{
        e.preventDefault();
        let email = e.target.children.email.value;
        let password = e.target.children.password.value;
        let password_confirmation = e.target.children.password_confirmation.value;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='email' placeholder='Email'></input>
                    <br/>
                    <input type='text' id='password' placeholder='Password'></input>
                    <br/>
                    <input type='text' id='password_confirmation' placeholder='Password Confirmation'></input>
                    <br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default UserSignUp;
