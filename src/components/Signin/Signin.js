import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://serene-falls-16769.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
            <div class="Signin__form">
                <fieldset id="sign_up">
                    <legend>
                        Sign In
                    </legend>
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
                    <input onClick = {this.onSubmitSignIn} type="submit" value="Sign in"/>
                </div>
                <div className="Signin__field Signin__field--links">
                    <button onClick = {() => onRouteChange('register') }> Register </button>
                    <a href="www.google.com"> Forgot your password? </a>
                </div>
            </div>
        </section>
    )
    }
}

export default Signin;