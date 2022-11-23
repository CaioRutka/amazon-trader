import React, { Component } from 'react'
import Link from 'next/link';

export default class PaymentExperience extends Component {
    render() {
        return (
            <>
                <div className="payment-experience-area bg-f4fcff ptb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="payment-experience-content">
                                    <h2>AMAZON TRADER FX.</h2>
                                    <p>Venha fazer parte desta plataforma automatica de investimentos, onde o seu lucro é diario e creditado de forma 100% automatica, cinco dias por semana, direto em sua e-wallet cadastrada.</p>
                                    <p>Cadastre-se utilizando apenas a sua E-wallet USDT Tron e receba o seu lucro diariamente de forma automatica.</p>
                                    <p>Rendimentos variaveis acima de 0.3% ao dia, depositados de segunda a sexta-feira em sua E-wallet USDT Tron. Depositos apartir de 50 dolares somente em USDT Tron.</p>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="payment-experience-image text-center">
                                    <img 
                                        src="/images/experience-img1.png" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-payment-experience-box">
                                    <div className="icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3>Rentabilidade Alta</h3>
                                    <p>Deixe seu dinheiro render cada dia mais.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-payment-experience-box">
                                    <div className="icon">
                                        <i className="fab fa-audible"></i>
                                    </div>
                                    <h3>Lucros Diários</h3>
                                    <p>Você será contemplado com lucros diários, todos os dias nossa plataforma irá enviar seus lucros para sua carteira.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-payment-experience-box">
                                    <div className="icon">
                                        <i className="fas fa-credit-card"></i>
                                    </div>
                                    <h3>Wallet</h3>
                                    <p>Cadastre sua wallet e comece a ganhar. </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-payment-experience-box">
                                    <div className="icon">
                                        <i className="fab fa-expeditedssl"></i>
                                    </div>
                                    <h3>Blockchain</h3>
                                    <p>Todas as transações são feitas dentro da Blockchain, sendo entao eternas e facilmente rasteaveis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
