import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useForm } from 'react-hook-form';

import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';
import { approveUSDT } from "./api/usdt";
import { addInvestor, invest_amazon, admin_getUserBalance } from "./api/amazontrader";

const invest_initial = {
    amount: "",
}

function Profile() {
    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [invest, setInvest] = useState(invest_initial);
    const [depositedAmount, setDepositedAmount] = useState(0);

    const { register, handleSubmit, errors } = useForm();

    const onInvest = async e => {
        try {
            await approveUSDT(walletAddress, (invest.amount * 10 ** 18).toString(10), signer);
            await invest_amazon((invest.amount * 10 ** 18).toString(10), signer);            
        } catch (error) {
            console.log(error)
        }
    };

    const getUserDepositAmount = async e => {
        try {
            const amount = await admin_getUserBalance(walletAddress, signer);
            setDepositedAmount(amount);
            // setNumberContractBalance(size/10**18);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();
    }, [walletAddress]);

    const handleChangeInvest = e => {
        const { name, value } = e.target;
        setInvest(prevState => ({ ...prevState, [name]: value }));
    }

    const getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          try {
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setSigner(provider.getSigner());
            } else {
              console.log("Connect to MetaMask using the Connect button");
            }
          } catch (err) {
            console.error(err.message);
          }
        } else {
          /* MetaMask is not installed */
          console.log("Please install MetaMask");
        }
      };
    
      const addWalletListener = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          window.ethereum.on("accountsChanged", (accounts) => {
            setWalletAddress(accounts[0]);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setSigner(provider.getSigner());
          });
        } else {
          /* MetaMask is not installed */
          setWalletAddress("");
          console.log("Please install MetaMask");
        }
      };
    return (
        <>
            <Navbar />

            <PageBannerContent 
                    pageTitle="Perfil" 
                    pageCaption="Informações e operações." 
                />

            <div className="contact-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Seja bem-vindo ao Amazon Trader</h2>
                        <div className="bar"></div>
                        <p> Aqui você pode gerenciar seus investimentos, verificar seus rendimentos, e muito mais !</p>
                    </div>
                </div>
                
                <div className="bg-map">
                    <img src="/images/bg-map.png" alt="image" />
                </div>

                <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <h3>Rendimento Atual: 8% a.m</h3>
                                <h3>Total Depositado: {depositedAmount} USDT</h3>
                                <h3>Ganho Diário: {depositedAmount*0.27/100} USDT/dia</h3>
                            </div>  
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4 className="pb-5"> Reload Total Depositado.</h4>
                                    <button type="register" className="btn btn-primary" onClick={() => {getUserDepositAmount()}}>
                                        Reload
                                    </button>
                                </div>                              
                            </div>
                        </div>
                    </div>

                <div className="about-area ptb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4 className="pb-5"> Registrar sua carteira</h4>
                                    <button type="register" className="btn btn-primary" onClick={() => {addInvestor(walletAddress, signer)}}>
                                        Registrar
                                    </button>
                                </div>
                            </div>  
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4>Investir</h4>
                                </div>
                                <form id="contactForm" onSubmit={handleSubmit(onInvest)}>                                                         
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="amount"
                                                    placeholder="Quantia" 
                                                    className="form-control" 
                                                    value={invest.amount}
                                                    onChange={handleChangeInvest}
                                                    ref={register()}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Please enter the amount'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Investir</button>                                   
                                        </div>    
                                </form>                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Profile;
                                    