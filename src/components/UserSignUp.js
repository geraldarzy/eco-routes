import React from 'react';

class UserSignUp extends React.Component{

    //signIn/Up flow
    //user fills out form, submits form to backend, backend sends token or error

    handleSubmit=(e)=>{
        e.preventDefault();
        let email = e.target.children.email.value;
        let password = e.target.children.password.value;
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: email, password: password}),
        })
          .then((r) => r.json())
          .then((data) => {
            if (data.errors) {
              // set errors to show errors in the form
              this.setState({errors:data.errors})
            } else {
              // use the response to set state
              const { user, token } = data;
    
              localStorage.setItem("token", token);
    
              this.props.setCurrentUser(user);
              this.props.history.push("/");
            }
          });
    }

   




    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='email' placeholder='Email'></input>
                    <br/>
                    <input type='password' id='password' placeholder='Password'></input>
                    <br/>
                    <input type='password' id='password_confirmation' placeholder='Password Confirmation'></input>
                    <br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default UserSignUp;
