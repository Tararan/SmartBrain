import React from 'react';

const Signin = ({ onRouteChange }) => {
    return (
        <section className="Signin">
            <div class="Signin__form">
                <fieldset id="sign_up">
                    <legend>
                        Sign In
                    </legend>
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
                    <input onClick = {() => onRouteChange('home') } type="submit" value="Sign in"/>
                </div>
                <div className="Signin__field Signin__field--links">
                    <button onClick = {() => onRouteChange('register') }> Register </button>
                    <a href="www.google.com"> Forgot your password? </a>
                </div>
            </div>
        </section>
    )
}

export default Signin;