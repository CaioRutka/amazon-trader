import { ethers } from "ethers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

import { 
    contractAmazonTrader,
    abiAmazon,
} from "../../utils/walletAddress";

const alertContent = (failOrNot, message, selected_icon) => {
    MySwal.fire({
        title: failOrNot,
        text: message,
        icon: selected_icon,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const addInvestor = async (address, signer) => {
    try {
        const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    

        await contract.addInvestor(address);

		alertContent("Parabens!", "Registrado com sucesso!", "success");
      } catch (error) {
        alertContent("Erro", error.reason, "warning");
      }     
}; 

const invest_amazon = async (amount, signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    await contract.invest(amount);
	  alertContent("Parabens!", "Investiu com sucesso!", "success");
  } catch (error) {
		alertContent("Erro", error.reason, "warning");
  }  
};

const admin_distributeProfits = async (signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    await contract.distributeProfits();
	  alertContent("Parabens!", "Comando enviado com sucesso!", "success");
  } catch (error) {
		alertContent("Erro", error.reason, "warning");
  }  
};

const admin_ownerWithdraw = async (amount, signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    await contract.ownerWithdraw(amount);
	  alertContent("Parabens!", "Comando enviado com sucesso!", "success");
  } catch (error) {
		alertContent("Erro", error.reason, "warning");
  }  
};

const admin_ownerDeposit = async (amount, signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    await contract.ownerDeposit(amount);
	  alertContent("Parabens!", "Comando enviado com sucesso!", "success");
  } catch (error) {
		alertContent("Erro", error.reason, "warning");
  }  
};

const admin_getBalance = async (signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    const balance = await contract.getBalance();
    return parseInt(balance._hex,16);
  } catch (error) {
		alertContent("Erro", error, "warning");
  }  
};

const admin_getSize = async (signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    const size = await contract.getSize();
    return parseInt(size._hex,16);
  } catch (error) {
		alertContent("Erro", error, "warning");
  }  
};

const admin_removeInvestor = async (address, signer) => {
  try 
  {
    const contract = new ethers.Contract(contractAmazonTrader, abiAmazon, signer);    
    await contract.removeInvestor(address);
	  alertContent("Parabens!", "Comando enviado com sucesso!", "success");
  } catch (error) {
		alertContent("Erro", error.reason, "warning");
  }  
};



module.exports = {
  addInvestor,
  invest_amazon,
  admin_distributeProfits,
  admin_ownerWithdraw,
  admin_ownerDeposit,
  admin_getBalance,
  admin_getSize,
  admin_removeInvestor
};

/*getBalance();
getSize();*/