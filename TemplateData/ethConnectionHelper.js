window.hasWallet = false;

window.checkChainUnsupported = async(hexId) => {
    if(!window.chainConfigs.map(x => window.hexlify(x.id)).includes(hexId)) {
        window.interactor.execute("ShowUnsupportedIndicator", null, true);
    }

    else {
        window.interactor.execute("HideUnsupportedIndicator", null, true);
    }
}

window.checkAddressConnection = async() => {
    if(!window.ethereum.selectedAddress) {
        window.interactor.execute("SetIndicatorDisconnected", null, true);
    }

    else {
        window.interactor.execute("SetIndicatorConnected", null, true);
    }
}

window.requestSwitchChain = async(
    targetChain // chain config
) => {
    let {
        id: chainId, 
        name: chainName,
        nativeCurrency,
        rpc
    } = targetChain;
    
    chainId = window.hexlify(chainId);

    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId }]
        });

        window.chainChanged = false;

        while(!window.chainChanged) {
            await window.sleep(1);
        }
    } 
    catch (e) {
        // This error code indicates that the chain has not been added to MetaMask
        if (e.code === 4902 || e.data?.originalError?.code === 4902) {

            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainName,
                            chainId,
                            nativeCurrency,
                            rpcUrls: [rpc]
                        }
                    ]
                });

                window.chainChanged = false;

                while(!window.chainChanged) {
                    await window.sleep(1);
                }
            }

            catch(e) {
                console.error(e);
            }
        }

        else {
            console.error(e);
        }
    }
}

window.getUSDCBalance = async() => {
    const options = {
        method: 'GET',
        url: 'https://deep-index.moralis.io/api/v2/0x2438939dd447e6a223c14968bd6a18920b98dA5F/erc20',
        params: {chain: window.ethereum.chainId},
        headers: {accept: 'application/json', 'X-API-Key': 'Uz4nx8socOf6C6o0qyZ4ELGUm0SKdzODYS6yrhmnRCmF9vKMObZ0Qfc9tyG2XhdX'}
    };

    let chainConfig = window.chainConfigs.filter(x => x.id == window.ethereum.networkVersion)[0];
      
    let res = await axios.request(options);
    let tokens = res.data;
    let usdcToken = tokens.filter(x => x.token_address.toLowerCase() == chainConfig.crossChainToken.toLowerCase())[0];

    let balance = 0;
    if(usdcToken) {
        balance = parseInt(usdcToken.balance) / Math.pow(10, usdcToken.decimals);
    }

    console.log(tokens);
    
    console.log("update token balance", balance);
    window.interactor.execute("UpdateTokenBalance", balance.toLocaleString("en", { maximumFractionDigits: 2, minimumFractionDigits: 2 }))
}

(() => {
    if(!window.ethereum) {
        return;
    }

    window.ethereum.on('accountsChanged', () => {
        // check if supported
        window.checkAddressConnection();
    });

    window.ethereum.on('chainChanged', (hexId) => {
        // check if supported
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        window.provider = provider;
        window.signer = window.provider.getSigner();
        window.chainChanged = true;
        console.log('chain changed');
        window.checkChainUnsupported(hexId);
    });
})();
