
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Link from '../../utils/ActiveLink';

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setSigner(provider.getSigner());;
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
        console.log(accounts[0]);
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
                                        {walletAddress && walletAddress.length > 0
                                        ? "Profile"
                                        : ""}
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button type="connect" className="btn btn-primary" onClick={connectWallet}>
                                    <li>
                                        {walletAddress && walletAddress.length > 0
                                        ? `Connected: ${walletAddress.substring(
                                            0,
                                            6
                                        )}...${walletAddress.substring(38)}`
                                        : "Connect Wallet"}
                                    </li>
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