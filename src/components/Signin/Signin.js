import React from 'react';

const Signin = ({}) => {
    return (
        <section className="Signin">
            <form class="Signin__form">
                <fieldset id="sign_up">
                    <legend>
                        Sign In
                    </legend>
                    <div className="Signin__field Signin__field--email">
                        <label for="email"> Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="Signin__field Signin__field--password">
                        <label for="password"> Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <div className="Signin__checkbox">
                        <input id="remember-me" type="checkbox" name="remember-me"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                </fieldset>
                <div className="Signin__submit">
                    <input type="submit"/>
                </div>
                <div className="Signin__field Signin__field--links">
                    <a href="#"> Sign Up</a>
                    <a href="#"> Forgot your password? </a>
                </div>
            </form>
        </section>
    )
}

export default Signin;