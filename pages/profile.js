import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import Footer from '../components/Layouts/Footer';
import baseUrl from '../utils/baseUrl';

class Profile extends Component {
    state = {
        username: '',
        walletAdress: '',
        totalAmountInvested: '',
        depositHashTransactions: [],
    }

    _id = '';
    _isMounted = false;

    componentDidMount() {
        this._id = localStorage.getItem("mykey");
        const url = `${baseUrl}/user/getuserinfo/${this._id}`;

        axios.get(url)
        .then(res => {
            this.setState({ username: res.data.username });
            this.setState({ walletAdress: res.data.walletAdress });
            this.setState({ totalAmountInvested: res.data.totalAmountInvested });
            this.setState({ depositHashTransactions: res.data.depositHashTransactions });
            console.log(this.state);
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <Navbar />

                <PageBannerContent/>
                <div className="about-area ptb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span>Informações de Deposito</span>
                                    <h4> Mande USDT na rede ETH ou na rede da Binance para esse endereço de wallet, que automaticamente validaremos sua transação, basta colocar o hash no campo abaixo que seu deposito será validado. </h4>
                                    <h3>Wallet para deposito: {this.state.walletAdress} </h3>                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-area ptb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span>Informações do User</span>
                                    <h5>UserName: {this.state.username} </h5>
                                    <h5>Wallet: {this.state.walletAdress} </h5>
                                    <h5>Total Invested: {this.state.totalAmountInvested} </h5>
                                    <h5>Hash Transactions: </h5>
                                    <ul>
                                        {
                                            this.state.depositHashTransactions
                                                .map(depositHashTransactions =>
                                                    <li key={depositHashTransactions.id}>{depositHashTransactions}</li>
                                                )
                                        }
                                    </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Profile;