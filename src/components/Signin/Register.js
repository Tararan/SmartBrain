import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <section className="Signin">
            <div class="Signin__form">
                <fieldset id="sign_up">
                    <legend>
                        Register
                    </legend>
                    <div className="Signin__field Signin__field--name">
                        <label htmlFor="name"> Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="Signin__field Signin__field--email">
                        <label htmlFor="email"> Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="Signin__field Signin__field--password">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <div className="Signin__checkbox">
                        <input id="remember-me" type="checkbox" name="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                </fieldset>
                <div className="Signin__submit">
                    <input onClick = {() => onRouteChange('home') } type="submit" value="Register"/>
                </div>
                <div className="Signin__field Signin__field--links">
                <button onClick = {() => onRouteChange('signin') }> Sign In</button>
                    <a href="www.google.com"> Forgot your password? </a>
                </div>
            </div>
        </section>
    )
}

export default Register;