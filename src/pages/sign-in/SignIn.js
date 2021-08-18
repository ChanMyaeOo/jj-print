import React, { useState } from 'react'
import useStyles from './styles'
// import LogoImg from '../../images/logo.png'
import LogoImg from '../../images/jj-logo.jpg'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase'

const SignIn = () => {
    const classes = useStyles()
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
            history.push("/");
            }
        })
        .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
            history.push("/");
            }
            console.log(auth);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className={classes.signIn}>

            <div className={classes.signInFormWrap}>
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className={classes.signBtn}
                        type="submit"
                        onClick={signIn}>Sign In</button>
                </form>

                <p>By creating an account, you agree to JJ Print's Conditions of Use and Privacy Notice.</p>
                <button className={classes.signBtn} type="submit" onClick={register}>Create your Account</button>
            </div>
        </div>
    )
}

export default SignIn
