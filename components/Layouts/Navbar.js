import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
    // Navbar 
    _id = '';
    _isMounted = false;

    state = {
        display: false,
        collapsed: true
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    UNSAFE_componentWillMount() {
        if (typeof window !== 'undefined') {
            this._id = localStorage.getItem("user_id");
        }
    }

    componentDidMount() {        
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const loggedIn = this._id;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        if (loggedIn  === null || loggedIn === ''){
            return (
                <>
                    <div id="navbar" className="navbar-area">
                        <div className="luvion-nav">
                            <div className="container">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link href="/">
                                        <a className="navbar-brand">
                                            <img src="/images/logo.png" alt="logo" />
                                            <img src="/images/black-logo.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={this.toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" 
                                        aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a className="nav-link">Sobre</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a className="nav-link">Contato</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="others-options">
                                        <Link href="/login">
                                            <a className="login-btn">
                                                <i className="flaticon-user"></i> Login
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="others-options">
                                        <Link href="/sign-up">
                                            <a className="login-btn">
                                                <i className="flaticon-user"></i> Registro
                                            </a>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else if (loggedIn  !== null || loggedIn !== ''){
            return (
                <>
                    <div id="navbar" className="navbar-area">
                        <div className="luvion-nav">
                            <div className="container">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link href="/">
                                        <a className="navbar-brand">
                                            <img src="/images/logo.png" alt="logo" />
                                            <img src="/images/black-logo.png" alt="logo" />
                                        </a>
                                    </Link>

                                    <button 
                                        onClick={this.toggleNavbar} 
                                        className={classTwo}
                                        type="button" 
                                        data-toggle="collapse" 
                                        data-target="#navbarSupportedContent" 
                                        aria-controls="navbarSupportedContent" 
                                        aria-expanded="false" 
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar top-bar"></span>
                                        <span className="icon-bar middle-bar"></span>
                                        <span className="icon-bar bottom-bar"></span>
                                    </button>

                                    <div className={classOne} id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a className="nav-link">Sobre</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a className="nav-link">Contato</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="others-options">
                                        <Link href="/profile">
                                            <a className="login-btn">
                                                <i className="flaticon-user"></i> Perfil
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="others-options">
                                        <button type="sair" className="btn btn-primary" onClick={() => {localStorage.clear();}}>
                                            <Link href="/"> 
                                                <a className="login-btn">
                                                    <i className="flaticon-cancel"></i> Sair
                                                </a>
                                            </Link>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Navbar;