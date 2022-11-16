import { ethers } from "ethers";

import { 
  contractUSDT,
  contractAmazonTrader,
  abiUSDT
} from "../../utils/walletAddress";

const hexToDecimal = hex => parseInt(hex, 16);

const approveUSDT = async (address, amount, signer) => {
    try {
        const contract = new ethers.Contract(contractUSDT, abiUSDT, signer);   
        
        const allowance = await contract.allowance(address, contractAmazonTrader);

        if (hexToDecimal(allowance._hex) < amount)
        {
          await contract.approve(contractAmazonTrader, amount);
        } else {
          
        }        
      } catch (error) {
        console.log(error);
      }    
    
}; 

module.exports = {
    approveUSDT
};