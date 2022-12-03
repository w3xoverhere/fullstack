import React, {useState} from 'react';
import s from './../../static/css/Authentication.module.css'
import {useDispatch, useSelector} from "react-redux";
import {userAuthenticate} from "../../store/AuthSlice";

const Authentication = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const tokenShow = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch();

    const tokenToGlobal = (token) => dispatch(userAuthenticate(token))

    const handleChange = (event) => {
        event.target.name === 'email'? setEmail(event.target.value): setPassword(event.target.value);
    }

    const submitForm = async (event) => {
        event.preventDefault()

        let results = await fetch(`http://localhost:8000/api/auth/token/login`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                email:email,
                password:password,

            }),
        }).then((response)=> {
            if(!response.ok) throw Error('Something is wrong!')
            return response.json()
        }).then((data)=>{
            setToken(data.auth_token);
            tokenToGlobal(data);
        })
    }


    return (
        <div className={s.LoginWrapper}>
            <form className={s.LoginForm}>
                <h2 className={s.LoginHeader}>Login</h2>
                <input placeholder='Enter a email' className={s.LoginInput} name='email' type='email' value={email} onChange={handleChange}/>
                <input placeholder='Enter a password' className={s.LoginInput} name='password' type='password' value={password} onChange={handleChange}/>
                <input onClick={submitForm} className={s.LoginButton} type='submit' value="Login"/>
            </form>
            <h1>{tokenShow}</h1>
        </div>
    );
};

export default Authentication;