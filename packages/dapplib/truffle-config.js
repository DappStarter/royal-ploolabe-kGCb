require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike curtain sad unique gesture basket equal gate'; 
let testAccounts = [
"0xb7a30239881d605e15aa13faffa2cd689160b2a8e2b0c5af9ae1acd8317f8820",
"0x93b7c8a55bae36736ee764a122b69f936c9cceaeedec1b33496d7fae76afe408",
"0x8cf297b6e73914ea482df92f9e320503709aa1fd7a1ea7a438f921f964fb5069",
"0x331d513bd7a77c61f5c176b4ab75440d68edefc544d74414998d1bed0b9cda5b",
"0x129ab5db56207ae2c133eb9640a4a61681a43e57cf327ae7dc42f3c86f7b86cc",
"0x03b176e95dc5ad7c6164e923acf8f2723175cbf0e70100019c3961a555b9fac6",
"0x3f73a6b5bf9bc57f145ea343331c67e5dd3a15b9f195b610a312b3edd1f9a4ef",
"0xc0010e9bcf8aa7b53a1019c635376701a1c61a300ae519696c8abdbaa7f45b8f",
"0x4e94de6abad74fd111f94bd9faa39156def504458c1ad31267c5faf45ba709a6",
"0x26f14947ccabc51f52720ac7442afba7714292b0745403b9aea1b37782fb6226"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


