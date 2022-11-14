import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useForm } from 'react-hook-form';
import { approveUSDT } from "./api/usdt";
import { addInvestor, invest_amazon } from "./api/amazontrader";

// Form initial state
const approve_initial = {
    amount: "",
};

const invest_initial = {
    amount: "",
}

function Profile() {
    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [approve, setApprove] = useState(approve_initial);
    const [invest, setInvest] = useState(invest_initial);

    const { register, handleSubmit, errors } = useForm();

    const onApprove = async e => {
        try {
            approveUSDT((approve.amount * 10 ** 18).toString(10), signer)
        } catch (error) {
            console.log(error)
        }
    };

    const onInvest = async e => {
        try {
            invest_amazon((invest.amount * 10 ** 18).toString(10), signer)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();
    }, [walletAddress]);

    const handleChangeApprove = e => {
        const { name, value } = e.target;
        setApprove(prevState => ({ ...prevState, [name]: value }));
    }

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
            <PageBannerContent/>
            <div className="about-area ptb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>Aprove o USDT</span>
                            </div>
                            <form id="contactForm" onSubmit={handleSubmit(onApprove)}>                                                         
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="amount"
                                                placeholder="Amount" 
                                                className="form-control" 
                                                value={approve.amount}
                                                onChange={handleChangeApprove}
                                                ref={register()}
                                            />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.name && 'Please enter the amount'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">Aprovar</button>                                   
                                    </div>      
                               
                                </form>  
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                            <span> Registrar sua carteira.</span>
                            <button type="register" className="btn btn-primary" onClick={() => {addInvestor(walletAddress, signer)}}>
                                Registrar
                            </button>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span>Investir</span>
                                </div>
                                <form id="contactForm" onSubmit={handleSubmit(onInvest)}>                                  
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="amount"
                                                placeholder="Amount" 
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
            </div>
            <Footer />
        </>
    );
}

export default Profile;
                                    