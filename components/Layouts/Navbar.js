import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { ownerWallet, chainId } from "../../utils/walletAddress";
import Link from '../../utils/ActiveLink';

const networks = {
  avax: {
    chainId: `0x${Number(43113).toString(16)}`,
    chainName: "Avalanche FUJI C-Chain",
    nativeCurrency: {
      name: "AVAX Token",
      symbol: "AVAX",
      decimals: 18
    },
    rpcUrls: [
      "https://api.avax-test.network/ext/bc/C/rpc"
    ],
    blockExplorerUrls: ["https://testnet.snowtrace.io/"]
  }
};

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    checkNetwork();
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

  const checkNetwork = async () => {
    if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
      });  
      // return true if network id is the same
      if (currentChainId == `0x${Number(chainId).toString(16)}`) {
      } else if (currentChainId != `0x${Number(chainId).toString(16)}`) {
        switchNetwork(currentChainId);
      }
    }    
  };

  const switchNetwork = async () => {
    try{
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${Number(43113).toString(16)}`}],
    });
    window.location.reload();
  } catch (err) {
    if (err.code == 4902){
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["avax"]
          }
        ]
      });
      // refresh
      window.location.reload();
    }
  }
    // refresh
    
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
                                <Link href="/how-to" activeClassName="active">
                                    <a className="nav-link">Como Investir</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/contact" activeClassName="active">
                                    <a className="nav-link">Contato</a>
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
                                <Link href="/profile" activeClassName="active">
                                    <a className="nav-link">
                                        {walletAddress && walletAddress.length > 0 && walletAddress == ownerWallet
                                        ? ""
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
