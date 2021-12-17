import { currAccount } from '@/composables/getWallet'
import setupEventListener from "./eventListener";

const connectWallet = () => {
    const { ethereum } = window;
    if(!ethereum){
      console.log("Get Metamask!")
    }
    ethereum.request({method: 'eth_requestAccounts'})
      .then(accounts => {
        currAccount.value = accounts[0]
        setupEventListener() 
      })
      .catch(err => console.log(err))
  }

export default connectWallet