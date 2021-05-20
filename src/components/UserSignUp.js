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
                    <label for='email'>Email:</label>
                    <input type='text' id='email'></input>
                    <br/>
                    <label for='email'>Password:</label>
                    <input type='text' id='password'></input>
                    <br/>
                    <label for='email'>Password Confirmation:</label>
                    <input type='text' id='password_confirmation'></input>
                    <br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default UserSignUp;
