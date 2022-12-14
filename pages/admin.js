import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useForm } from 'react-hook-form';

import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';
import { approveUSDT } from "./api/usdt";
import { 
addInvestor,
  invest_amazon,
  admin_distributeProfits,
  admin_ownerWithdraw,
  admin_ownerDeposit,
  admin_getBalance,
  admin_getSize,
  admin_removeInvestor
 } from "./api/amazontrader";

const invest_initial = {
    amount: "",
}

const deposit_initial = {
    amount: "",
}

const withdraw_initial = {
    amount: "",
}

const removeInvestor_initial = {
    address: "",
}

function Profile() {
    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [invest, setInvest] = useState(invest_initial);
    const [deposit, setDeposit] = useState(deposit_initial);
    const [withdraw, setWithdraw] = useState(withdraw_initial);
    const [address, setAddress] = useState(removeInvestor_initial);
    const [numberOfInvestors, setNumberOfInvestors] = useState(0);
    const [numberContractBalance, setNumberContractBalance] = useState(0);

    const { register, handleSubmit, errors } = useForm();

    const onInvest = async e => {
        try {
            await approveUSDT(walletAddress, (invest.amount * 10 ** 18).toString(10), signer);
            await invest_amazon((invest.amount * 10 ** 18).toString(10), signer);            
        } catch (error) {
            console.log(error)
        }
    };

    const onDeposit = async e => {
        try {
            await approveUSDT(walletAddress, (deposit.amount * 10 ** 18).toString(10), signer);
            await admin_ownerDeposit((deposit.amount * 10 ** 18).toString(10), signer);            
        } catch (error) {
            console.log(error)
        }
    };

    const onWithdraw = async e => {
        try {
            await approveUSDT(walletAddress, (withdraw.amount * 10 ** 18).toString(10), signer);
            await admin_ownerWithdraw((withdraw.amount * 10 ** 18).toString(10), signer);            
        } catch (error) {
            console.log(error)
        }
    };

    const onRemove = async e => {
        try {
            await admin_removeInvestor(address.address, signer);            
        } catch (error) {
            console.log(error)
        }
    };

    const getBalance = async e => {
        try {
            const size = await admin_getBalance(signer);
            setNumberContractBalance(size/10**18);
        } catch (error) {
            console.log(error)
        }
    };

    const getSize = async e => {
        try {
            const size = await admin_getSize(signer);
            setNumberOfInvestors(size);
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

    const handleChangeDeposit = e => {
        const { name, value } = e.target;
        setDeposit(prevState => ({ ...prevState, [name]: value }));
    }

    const handleChangeWithdraw = e => {
        const { name, value } = e.target;
        setWithdraw(prevState => ({ ...prevState, [name]: value }));
    }

    const handleChangeAddress = e => {
        const { name, value } = e.target;
        setAddress(prevState => ({ ...prevState, [name]: value }));
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
                    pageTitle="Administrador" 
                    pageCaption="" 
                />

            <div className="contact-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Administrador</h2>
                        <div className="bar"></div>
                        <p> Aqui voc?? pode gerenciar seus investimentos, investidores e muito mais !</p>
                    </div>
                </div>
                
                <div className="bg-map">
                    <img src="/images/bg-map.png" alt="image" />
                </div>

                <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <h2>Investidores: {numberOfInvestors}</h2>
                                <h2>Balan??o: {numberContractBalance} USDT</h2>
                            </div>  
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4 className="pb-5"> Reiniciar Investidores e Balan??o.</h4>
                                    <button type="register" className="btn btn-primary" onClick={() => {getBalance(); getSize();}}>
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
                                    <h4 className="pb-5"> Registro</h4>
                                    <button type="register" className="btn btn-primary" onClick={() => {addInvestor(walletAddress, signer)}}>
                                        Registrar
                                    </button>
                                </div>
                            </div>  
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4>Investir</h4>
                                </div>
                                <form id="investForm" onSubmit={handleSubmit(onInvest)}>                                                         
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
                    <div className="container">
                        <div className="row align-items-center pt-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4>Admin Deposit</h4>
                                </div>
                                <form id="adminDepositForm" onSubmit={handleSubmit(onDeposit)}>                                                         
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="amount"
                                                    placeholder="Quantia" 
                                                    className="form-control" 
                                                    value={deposit.amount}
                                                    onChange={handleChangeDeposit}
                                                    ref={register()}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Please enter the amount'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Deposit</button>                                   
                                        </div>    
                                </form>                                 
                            </div>   

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4>Admin Withdraw</h4>
                                </div>
                                <form id="adminWithdrawForm" onSubmit={handleSubmit(onWithdraw)}>                                                         
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="amount"
                                                    placeholder="Quantia" 
                                                    className="form-control" 
                                                    value={withdraw.amount}
                                                    onChange={handleChangeWithdraw}
                                                    ref={register()}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Please enter the amount'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Withdraw</button>                                   
                                        </div>    
                                </form>                                 
                            </div>                              
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center pt-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4>Admin Remove Investor</h4>
                                </div>
                                <form id="adminRemoveInvestor" onSubmit={handleSubmit(onRemove)}>                                                         
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="address"
                                                    placeholder="Endere??o" 
                                                    className="form-control" 
                                                    value={address.address}
                                                    onChange={handleChangeAddress}
                                                    ref={register()}
                                                />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Please enter the address'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Remove</button>                                   
                                        </div>    
                                </form>                                 
                            </div> 
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center pt-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h4 className="pb-5"> Admin Distribute Profits</h4>
                                    <button type="register" className="btn btn-primary" onClick={() => {admin_distributeProfits(signer)}}>
                                        Distribute
                                    </button>
                                </div>
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
                                    