import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const provider = window.ethereum;
    provider.enable();
    web3 = new Web3(provider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/7521994a34104f0e9375ca0322e82d12'
    );
    web3 = new Web3(provider);
}

export default web3;