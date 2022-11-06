import React, { Component , useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../utils/baseUrl';


const alertContent1 = (error) => {
    MySwal.fire({
        title: 'Falha!',
        text: 'Registro falhou, verifique os dados..' + error,
        icon: 'warning',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const alertContent2 = (username) => {
    MySwal.fire({
        title: 'Parabens!',
        text: 'Registro feito com sucesso!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    email: "",
    walletAdress: "",
    username: "",
    password: "",
};

const SignUp = () => {
    const [signup, setSignUp] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setSignUp(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/user`;
            const { email, walletAdress, username, password } = signup;
            const payload = { email, walletAdress, username, password };
            await axios
                .post(url, payload)
                .then((response) => {
                 if (response.data.error == undefined) {
                    alertContent2();    
                 } else {
                    alertContent1(response.data.error);                    
                }
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="signup-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-image">
                            <img src="/images/signup-bg.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="signup-form">
                                        <div className="logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/black-logo.png" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <h3>Crie já sua conta na Amazon Trader FX.</h3>
                                        <p>Ja tem conta? <Link href="/login"><a>Log in</a></Link></p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" placeholder="Nome" className="form-control" 
                                                value={signup.username}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" placeholder="Seu endereço de email" className="form-control" 
                                                value={signup.email}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" placeholder="Criar senha" className="form-control" 
                                                value={signup.password}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="walletAdress" id="walletAdress" placeholder="Wallet" className="form-control"
                                                value={signup.walletAdress}
                                                onChange={handleChange}
                                                ref={register({ required: true })}
                                            />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default SignUp;