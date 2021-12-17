import { ref } from "vue"
import setupEventListener from "./eventListener";
const currAccount = ref(null)

const getWallet = () => {
    const { ethereum } = window;
    if(!ethereum){
      console.log("Make sure you have metamask installed!")
      return
    }
    ethereum.request({method: 'eth_accounts'})
      .then(accounts => {
        if (accounts.lenght !== 0 ){
          currAccount.value = accounts[0]
          setupEventListener()
        }else {
          console.log("No authorized account found")
        }
      })
  }

export { getWallet, currAccount }