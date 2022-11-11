// chains
export const BSCTEST = {
    name: 'Binance',
    shortName: 'BSCTEST',
    evmChain: "binance",
    id: 97,
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    nativeCurrency: {
        name: 'BNB',
        decimals: 18,
        symbol: 'BNB',
    },
    blockExplorerUrl: 'https://testnet.bscscan.com',
    messageSender: "0x5851ababf1e64B73f5a4844639321A25785cdA81",
    messageReceiver: "0x5b72b3eE4b237A8eB5FB606abFf1E8E58F9f25a0",
    nftMarketplace: "0xbd906CC45ED751f0426034D42BcF84bd58Fac510",
    crossChainToken: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
    gateway: "0x4D147dCb984e6affEEC47e44293DA442580A3Ec0"
};

export const MUMBAI = {
    name: 'Polygon',
    shortName: 'MUMBAI',
    evmChain: "polygon",
    id: 80001,
    // rpc: 'https://rpc-mumbai.matic.today/',
    // rpc: 'https://polygontestapi.terminet.io/rpc',
    rpc: 'https://rpc-mumbai.maticvigil.com/',
    nativeCurrency: {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    blockExplorerUrl: 'https://mumbai.polygonscan.com',
    messageSender: "0x80407181E442e6B772dE3FAa82947a46a09f3889",
    messageReceiver: "0x5010dD918042365C8c9065d0f4E1bd20E354416e",
    nftMarketplace: "0x575E65efC03b2FC2c9383C4af46f285e992EB270",
    crossChainToken: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
    gateway: "0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B"
};

export const AVAXFUJI = {
    name: 'Avalanche',
    shortName: 'AVAX',
    evmChain: "avalanche",
    id: 43113,
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    nativeCurrency: {
        name: 'AVAX',
        decimals: 18,
        symbol: 'AVAX',
    },
    blockExplorerUrl: 'https://testnet.snowtrace.io',
    messageSender: "0xCb57591351314CbEDBee1E95025A0E0c8a4e7DEe",
    messageReceiver: "0x424e70603609dabd677bAF90a88E206c3ca6DD76",
    nftMarketplace: "0xA593A0177C69192139e0B228Fb70835170580929",
    crossChainToken: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
    gateway: "0xC249632c2D40b9001FE907806902f63038B737Ab"
};

export const ETH = {
    name: 'Ethereum',
    shortName: 'ETH',
    evmChain: '',
    id: 1,
    rpc: '',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://etherscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const BSC = {
    name: 'Binance Smart Chain Mainnet',
    shortName: 'BSC',
    evmChain: '',
    id: 56,
    rpc: 'https://bsc-dataseed1.binance.org',
    nativeCurrency: {
        name: 'BNB',
        decimals: 18,
        symbol: 'BNB',
    },
    blockExplorerUrl: 'https://bscscan.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const AVAX = {
    name: 'Avalanche C-Chain',
    shortName: 'AVAX',
    evmChain: '',
    id: 43114,
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    nativeCurrency: {
        name: 'AVAX',
        decimals: 18,
        symbol: 'AVAX',
    },
    blockExplorerUrl: 'https://snowtrace.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const POLYGON = {
    name: 'Polygon Mainnet',
    shortName: 'Polygon',
    evmChain: '',
    id: 137,
    rpc: 'https://polygon-rpc.com',
    nativeCurrency: {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    blockExplorerUrl: 'https://polygonscan.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const ARB = {
    name: 'Arbitrum One',
    shortName: 'ARB',
    evmChain: '',
    id: 42161,
    rpc: 'https://arb1.arbitrum.io/rpc',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://arbiscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const OP = {
    name: 'Optimism',
    shortName: 'OP',
    evmChain: '',
    id: 10,
    rpc: 'https://mainnet.optimism.io',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://optimistic.etherscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const CRO = {
    name: 'Cronos Mainnet',
    shortName: 'CRO',
    evmChain: '',
    id: 25,
    rpc: 'https://evm.cronos.org',
    nativeCurrency: {
        name: 'CRO',
        decimals: 18,
        symbol: 'CRO',
    },
    blockExplorerUrl: 'https://cronos.org/explorer',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const FANTOM = {
    name: 'Fantom',
    shortName: 'FTM',
    evmChain: "fantom",
    id: 4002,
    rpc: 'https://rpc.ankr.com/fantom_testnet',
    nativeCurrency: {
        name: 'FTM',
        decimals: 18,
        symbol: 'FTM',
    },
    blockExplorerUrl: 'https://testnet.ftmscan.com',
    messageSender: "0xd66BaFd419D475f7d5bA4278FcF1108961b05F27",
    messageReceiver: "0xB014eC8B9b80C09e1b7090B46f1D1EC3Cd08dE98",
    nftMarketplace: "0x5b821902aa68A89d62c0EF07AED783ECC253E083",
    crossChainToken: '0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61',
    gateway: "0x97837985Ec0494E7b9C71f5D3f9250188477ae14"
};

export const KLAYTN = {
    name: 'Klaytn Mainnet Cypress',
    shortName: 'KLAYTN',
    evmChain: '',
    id: 8217,
    rpc: 'https://public-node-api.klaytnapi.com/v1/cypress',
    nativeCurrency: {
        name: 'KLAY',
        decimals: 18,
        symbol: 'KLAY',
    },
    blockExplorerUrl: 'https://scope.klaytn.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const KAVA = {
    name: 'Kava EVM',
    shortName: 'KAVA',
    evmChain: '',
    id: 2222,
    rpc: 'https://evm.kava.io',
    nativeCurrency: {
        name: 'KAVA',
        decimals: 18,
        symbol: 'KAVA',
    },
    blockExplorerUrl: 'https://explorer.kava.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const GNO = {
    name: 'Gnosis',
    shortName: 'GNO',
    evmChain: '',
    id: 100,
    rpc: 'https://rpc.gnosischain.com',
    nativeCurrency: {
        name: 'xDAI',
        decimals: 18,
        symbol: 'xDAI',
    },
    blockExplorerUrl: 'https://gnosisscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const AURORA = {
    name: 'Aurora Mainnet',
    shortName: 'AURORA',
    evmChain: '',
    id: 1313161554,
    rpc: 'https://mainnet.aurora.dev',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://aurorascan.dev',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const HECO = {
    name: 'Huobi ECO Chain Mainnet',
    shortName: 'HECO',
    evmChain: '',
    id: 128,
    rpc: 'https://http-mainnet.hecochain.com',
    nativeCurrency: {
        name: 'HT',
        decimals: 18,
        symbol: 'HT',
    },
    blockExplorerUrl: 'https://hecoinfo.com',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const FUSION = {
    name: 'Fusion Mainnet',
    shortName: 'FUSION',
    evmChain: '',
    id: 32659,
    rpc: 'https://mainnet.anyswap.exchange',
    nativeCurrency: {
        name: 'FSN',
        decimals: 18,
        symbol: 'FSN',
    },
    blockExplorerUrl: 'https://www.fusion.org/',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const CELO = {
    name: 'Celo Mainnet',
    shortName: 'CELO',
    evmChain: '',
    id: 42220,
    rpc: 'https://forno.celo.org',
    nativeCurrency: {
        name: 'CELO',
        decimals: 18,
        symbol: 'CELO',
    },
    blockExplorerUrl: 'https://explorer.celo.org',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const EVMOS = {
    name: 'Evmos',
    shortName: 'EVMOS',
    evmChain: '',
    id: 9001,
    rpc: 'https://eth.bd.evmos.org:8545',
    nativeCurrency: {
        name: 'EVMOS',
        decimals: 18,
        symbol: 'EVMOS',
    },
    blockExplorerUrl: 'https://evm.evmos.org',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const DOGE = {
    name: 'Dogechain Mainnet',
    shortName: 'DOGE',
    evmChain: '',
    id: 2000,
    rpc: 'https://rpc-sg.dogechain.dog',
    nativeCurrency: {
        name: 'DOGE',
        decimals: 18,
        symbol: 'DOGE',
    },
    blockExplorerUrl: 'https://explorer.dogechain.dog',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const OKX = {
    name: 'OKXChain Mainnet',
    shortName: 'OKX',
    evmChain: '',
    id: 66,
    rpc: 'https://exchainrpc.okex.org',
    nativeCurrency: {
        name: 'OKT',
        decimals: 18,
        symbol: 'OKT',
    },
    blockExplorerUrl: 'https://www.oklink.com/en/okc',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const BOBA = {
    name: 'Boba Network',
    shortName: 'BOBA',
    evmChain: '',
    id: 288,
    rpc: 'https://mainnet.boba.network',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18,
        symbol: 'ETH',
    },
    blockExplorerUrl: 'https://blockexplorer.boba.network',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const MOONBASE = {
    name: 'Moonbeam',
    shortName: 'MOBA',
    evmChain: "moonbeam",
    id: 1287,
    rpc: 'https://moonbase-alpha.public.blastapi.io',
    nativeCurrency: {
        name: 'DEV',
        decimals: 18,
        symbol: 'DEV',
    },
    blockExplorerUrl: 'https://moonbase.moonscan.io',
    messageSender: "0x031B40fEE0aeb1417C95Bb2771695135895560F5",
    messageReceiver: "0x8163D2Be2fcCEDB6f584be1128254626c5a30eB3",
    nftMarketplace: "0x1A1BA67d116BaA7774B80Ce6c899923ee1b061A7",
    crossChainToken: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
    gateway: "0x5769D84DD62a6fD969856c75c7D321b84d455929"
};

export const MOVR = {
    name: 'Moonriver',
    shortName: 'MOVR',
    evmChain: '',
    id: 1285,
    rpc: 'https://rpc.api.moonriver.moonbeam.network',
    nativeCurrency: {
        name: 'MOVR',
        decimals: 18,
        symbol: 'MOVR',
    },
    blockExplorerUrl: 'https://moonriver.moonscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const GLMR = {
    name: 'Moonbeam',
    shortName: 'GLMR',
    evmChain: '',
    id: 1284,
    rpc: 'https://rpc.api.moonbeam.network',
    nativeCurrency: {
        name: 'GLMR',
        decimals: 18,
        symbol: 'GLMR',
    },
    blockExplorerUrl: 'https://moonbeam.moonscan.io',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};

export const ONE = {
    name: 'Harmony One',
    shortName: 'ONE',
    evmChain: '',
    id: 1666600000,
    rpc: 'https://api.harmony.one',
    nativeCurrency: {
        name: 'ONE',
        decimals: 18,
        symbol: 'ONE',
    },
    blockExplorerUrl: 'https://explorer.harmony.one',
    messageSender: '',
    messageReceiver: '',
    nftMarketplace: '',
    crossChainToken: ''
};


export const chainConfigs = [
    BSCTEST,
    MUMBAI,
    AVAXFUJI,
    MOONBASE,
    FANTOM
];
