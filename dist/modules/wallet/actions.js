"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAppChainId = exports.SET_APP_CHAIN_ID = exports.acceptNetworkPartialSupport = exports.ACCEPT_NETWORK_PARTIAL_SUPPORT = exports.switchNetworkFailure = exports.switchNetworkSuccess = exports.switchNetworkRequest = exports.SWITCH_NETWORK_FAILURE = exports.SWITCH_NETWORK_SUCCESS = exports.SWITCH_NETWORK_REQUEST = exports.fetchWalletFailure = exports.fetchWalletSuccess = exports.fetchWalletRequest = exports.FETCH_WALLET_FAILURE = exports.FETCH_WALLET_SUCCESS = exports.FETCH_WALLET_REQUEST = exports.disconnectWallet = exports.DISCONNECT_WALLET = exports.changeNetwork = exports.CHANGE_NETWORK = exports.changeAccount = exports.CHANGE_ACCOUNT = exports.enableWalletFailure = exports.enableWalletSuccess = exports.enableWalletRequest = exports.ENABLE_WALLET_FAILURE = exports.ENABLE_WALLET_SUCCESS = exports.ENABLE_WALLET_REQUEST = exports.connectWalletFailure = exports.connectWalletSuccess = exports.connectWalletRequest = exports.CONNECT_WALLET_FAILURE = exports.CONNECT_WALLET_SUCCESS = exports.CONNECT_WALLET_REQUEST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
exports.CONNECT_WALLET_REQUEST = '[Request] Connect Wallet';
exports.CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet';
exports.CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet';
const connectWalletRequest = () => typesafe_actions_1.action(exports.CONNECT_WALLET_REQUEST);
exports.connectWalletRequest = connectWalletRequest;
const connectWalletSuccess = (wallet) => typesafe_actions_1.action(exports.CONNECT_WALLET_SUCCESS, { wallet });
exports.connectWalletSuccess = connectWalletSuccess;
const connectWalletFailure = (error) => typesafe_actions_1.action(exports.CONNECT_WALLET_FAILURE, { error });
exports.connectWalletFailure = connectWalletFailure;
exports.ENABLE_WALLET_REQUEST = '[Request] Enable Wallet';
exports.ENABLE_WALLET_SUCCESS = '[Success] Enable Wallet';
exports.ENABLE_WALLET_FAILURE = '[Failure] Enable Wallet';
const enableWalletRequest = (providerType) => typesafe_actions_1.action(exports.ENABLE_WALLET_REQUEST, { providerType });
exports.enableWalletRequest = enableWalletRequest;
const enableWalletSuccess = (providerType) => typesafe_actions_1.action(exports.ENABLE_WALLET_SUCCESS, { providerType });
exports.enableWalletSuccess = enableWalletSuccess;
const enableWalletFailure = (error) => typesafe_actions_1.action(exports.ENABLE_WALLET_FAILURE, { error });
exports.enableWalletFailure = enableWalletFailure;
exports.CHANGE_ACCOUNT = 'Change Account';
const changeAccount = (wallet) => typesafe_actions_1.action(exports.CHANGE_ACCOUNT, { wallet });
exports.changeAccount = changeAccount;
exports.CHANGE_NETWORK = 'Change Network';
const changeNetwork = (wallet) => typesafe_actions_1.action(exports.CHANGE_NETWORK, { wallet });
exports.changeNetwork = changeNetwork;
exports.DISCONNECT_WALLET = 'Disconnect';
const disconnectWallet = () => typesafe_actions_1.action(exports.DISCONNECT_WALLET);
exports.disconnectWallet = disconnectWallet;
exports.FETCH_WALLET_REQUEST = '[Request] Fetch Wallet';
exports.FETCH_WALLET_SUCCESS = '[Success] Fetch Wallet';
exports.FETCH_WALLET_FAILURE = '[Failure] Fetch Wallet';
const fetchWalletRequest = () => typesafe_actions_1.action(exports.FETCH_WALLET_REQUEST);
exports.fetchWalletRequest = fetchWalletRequest;
const fetchWalletSuccess = (wallet) => typesafe_actions_1.action(exports.FETCH_WALLET_SUCCESS, { wallet });
exports.fetchWalletSuccess = fetchWalletSuccess;
const fetchWalletFailure = (error) => typesafe_actions_1.action(exports.FETCH_WALLET_FAILURE, { error });
exports.fetchWalletFailure = fetchWalletFailure;
exports.SWITCH_NETWORK_REQUEST = '[Request] Switch Network';
exports.SWITCH_NETWORK_SUCCESS = '[Success] Switch Network';
exports.SWITCH_NETWORK_FAILURE = '[Failure] Switch Network';
const switchNetworkRequest = (chainId) => typesafe_actions_1.action(exports.SWITCH_NETWORK_REQUEST, { chainId });
exports.switchNetworkRequest = switchNetworkRequest;
const switchNetworkSuccess = (chainId) => typesafe_actions_1.action(exports.SWITCH_NETWORK_SUCCESS, { chainId });
exports.switchNetworkSuccess = switchNetworkSuccess;
const switchNetworkFailure = (chainId, error) => typesafe_actions_1.action(exports.SWITCH_NETWORK_FAILURE, { chainId, error });
exports.switchNetworkFailure = switchNetworkFailure;
exports.ACCEPT_NETWORK_PARTIAL_SUPPORT = 'Accept network partial support';
const acceptNetworkPartialSupport = () => typesafe_actions_1.action(exports.ACCEPT_NETWORK_PARTIAL_SUPPORT);
exports.acceptNetworkPartialSupport = acceptNetworkPartialSupport;
exports.SET_APP_CHAIN_ID = 'Set App ChainId';
const setAppChainId = (chainId) => typesafe_actions_1.action(exports.SET_APP_CHAIN_ID, { chainId });
exports.setAppChainId = setAppChainId;
//# sourceMappingURL=actions.js.map