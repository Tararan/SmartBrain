import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://serene-falls-16769.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render () {
        const { onRouteChange } = this.props;
        return (
            <section className="Signin">
                <div className="Signin__form">
                    <fieldset id="sign_up">
                        <legend>
                            Register
                        </legend>
                        <div className="Signin__field Signin__field--name">
                            <label htmlFor="name"> Name</label>
                            <input onChange = { this.onNameChange } type="text" name="name"/>
                        </div>
                        <div className="Signin__field Signin__field--email">
                            <label htmlFor="email"> Email</label>
                            <input onChange = { this.onEmailChange } type="email" name="email"/>
                        </div>
                        <div className="Signin__field Signin__field--password">
                            <label htmlFor="password"> Password</label>
                            <input onChange = { this.onPasswordChange } type="password" name="password"/>
                        </div>
                        <div className="Signin__checkbox">
                            <input id="remember-me" type="checkbox" name="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </fieldset>
                    <div className="Signin__submit">
                        <input onClick = { this.onSubmitSignIn } type="submit" value="Register"/>
                    </div>
                    <div className="Signin__field Signin__field--links">
                    <button onClick = {() => onRouteChange('signin') } > Sign In</button>
                        <a href="www.google.com"> Forgot your password? </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;