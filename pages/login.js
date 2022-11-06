import React, { Component , useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../utils/baseUrl';
import { useRouter } from 'next/router'


const alertContent1 = () => {
    MySwal.fire({
        title: 'Falha!',
        text: 'Login falhou, usuário nao encontrado..',
        icon: 'warning',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const alertContent2 = (username) => {
    MySwal.fire({
        title: 'Parabens !',
        text: 'Login feito com sucesso',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    email: "",
    password: "",
};

const Login = () => {
    const [login_credentials, setLoginCred] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const router = useRouter();

    const handleChange = e => {
        const { name, value } = e.target;
        setLoginCred(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            localStorage.clear();
            const url = `${baseUrl}/user/login`;
            const { email, password } = login_credentials;
            const payload = { email, password };
            await axios
                .post(url, payload)
                .then((response) => {
                 if (response.data.status == 'NAOACHOU') {
                    alertContent1();  
                    router.back();  
                 } else if (response.data.status == 'ACHOU') {
                    localStorage.setItem("mykey",response.data._id);
                    console.log(localStorage.getItem("mykey"))
                    alertContent2();       
                    router.back();             
                }
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <section className="login-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-image">
                            <img src="/images/login-bg.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="login-form">
                                        <div className="logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/black-logo.png" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <h3>Bem-vindo</h3>
                                        <p>Não tem conta? <Link href="/sign-up"><a>Sign up</a></Link></p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" placeholder="Endereço de Email" className="form-control"
                                                value={login_credentials.email}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" placeholder="Senha" className="form-control"
                                                value={login_credentials.password}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Login</button>
                                            
                                            <div className="forgot-password">
                                                <Link href="/forgot-password"><a>Esqueceu a Senha ?</a></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
    
}

export default Login;