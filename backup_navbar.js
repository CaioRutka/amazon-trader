
import { useEffect, useState } from "react";

import { ownerWallet } from "../../utils/walletAddress";
import Link from '../../utils/ActiveLink';

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    getCurrentWalletConnected();
  }, [walletAddress]);

  const connectWallet = async () => {
    let tronWeb;

    if (window.tronWeb) {
      if (window.tronLink.ready){
        tronWeb = tronLink.tronWeb;   
        setWalletAddress(tronWeb.defaultAddress.base58);     
      } 
      else 
      {
      const res = await tronLink.request({ method: 'tron_requestAccounts' });
      if (res.code === 200) {
        tronWeb = tronLink.tronWeb;
        setWalletAddress(tronWeb.defaultAddress.base58);     
        }
      } 
    } else {
      console.log("Please install TronLink");
    }
  };

  const getCurrentWalletConnected = async () => {
    let tronWeb;

    if (window.tronWeb) {
      if (window.tronLink.ready){
        tronWeb = tronLink.tronWeb;   
        setWalletAddress(tronWeb.defaultAddress.base58);     
      } 
      else 
      {
        console.log("Connect to TronLink using the Connect button");
      } 
    } else {
      console.log("Please install TronLink");
    }
  };
  
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

                    <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
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
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/profile" activeClassName="active">
                                    <a className="nav-link">
                                        {walletAddress && walletAddress.length > 0 && walletAddress != ownerWallet
                                        ? "Profile"
                                        : ""}
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/admin" activeClassName="active">
                                    <a className="nav-link">
                                        {walletAddress && walletAddress.length > 0 && walletAddress == ownerWallet
                                        ? "Admin"
                                        : ""}
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button type="connect" className="btn btn-primary" onClick={connectWallet}>
                                    <div className = "d-flex align-items-center wallet-menu-item selected">
                                      <div className = "wallet-item-info d-flex align-items-center">
                                        <div className="p-2 pt-0 pb-0">
                                          <img className="d-flex d1" src = "/images/n-tron3.1c1cc038.png" alt=""/>
                                        </div>
                                        <div className="d-flex d2">
                                          <span className="color">
                                          {walletAddress && walletAddress.length > 0
                                        ? `Connected: ${walletAddress.substring(
                                            0,
                                            6
                                        )}...${walletAddress.substring(38)}`
                                        : "Connect Wallet"}
                                          </span>
                                        </div>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</>
  );
}

export default Navbar;