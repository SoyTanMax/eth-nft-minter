import { ethers } from "ethers";
import { ref } from "vue"
import myEpicNft from '../utils/MyEpicNFT.json';

const status = ref('Mint NFT');

const transaction = ref(null)

const mintNFT = async () => {
    const CONTRACT_ADDRESS = "0x13874c128f46e88c5B0799663a18439AB01b396d"

    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

            let nftTxn = await connectedContract.makeAnEpicNFT();

            status.value = 'Minting...'
            await nftTxn.wait();
            
            status.value = 'Mint another one'

            transaction.value = `Success!, see your transaction on: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`

        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log(error)
    }
}

export  {mintNFT, status, transaction}