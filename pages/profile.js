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

    UNSAFE_componentWillMount() {
        if (typeof window !== 'undefined') {
            this._id = localStorage.getItem("user_id");
        }
    }

    componentDidMount() {
        const url = `${baseUrl}/user/getuserinfo/${this._id}`;
        axios.get(url)
        .then(res => {
            this.setState({ username: res.data.username });
            this.setState({ walletAdress: res.data.walletAdress });
            this.setState({ totalAmountInvested: res.data.totalAmountInvested });
            this.setState({ depositHashTransactions: res.data.depositHashTransactions });
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
                                    <h4>Pode investir a qualquer hora e o tanto quanto desejar (minimo 50 UDST). Os fundos serão adicionados à sua conta no espaço de uma hora. </h4>
                                    <h4>Envie USDT pela rede da TRON, e somente pela rede da TRON. </h4>
                                    <h3>Wallet para deposito: TMmzhMSHTGKt42H8n2dz5oEidKnUHJSC7D </h3>                                    
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
                                    <h5>Total Invested: {this.state.totalAmountInvested} USDT </h5>
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