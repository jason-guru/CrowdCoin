import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const provider = window.ethereum;
    provider.enable();
    web3 = new Web3(provider);
} else {
    const provider = new Web3.providers.HttpProvider(
        process.env.PROJECT
    );
    web3 = new Web3(provider);
}

export default web3;