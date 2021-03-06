exports.NAME = 'CoinMate';
exports.SUPPORTED_MODULES = ['ticker', 'trader', 'wallet'];
exports.API_ENDPOINT = 'https://coinmate.io/api/';

exports.SATOSHI_FACTOR = 1e8;

// spread factor
exports.FUDGE_FACTOR = 1.05;

// supported currencies
exports.COINMATE_CURRENCIES = ['EUR', 'CZK', 'USD', 'SGD'];

// set to 1 to trade using instant orders, or 0 for limit orders with spread specified
// by FUDGE_FACTOR
exports.TRADE_INSTANT_ORDERS = 1;
//https://github.com/stachon/lamassu-coinmate