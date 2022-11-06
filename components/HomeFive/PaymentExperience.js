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
                                    <h2>Deixe seu dinheiro lhe trazer mais dinheiro.</h2>
                                    <p>Com a Amazon Trader FX voce da ao seu dinheiro a liberdade de lhe trazer mais dinheiro. Sem investimento minimo e sem invetimento maximo, nós da Amazon Trader FX vamos lhe dar lucros diários.</p>
                                    <p>Imagine ter uma rentabilidade alta, com lucros diários, e eternamente ?</p>
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
