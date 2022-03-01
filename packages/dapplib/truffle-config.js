require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain equip hockey enroll bottom truth'; 
let testAccounts = [
"0x0d01d50fd3fbcb3c6d365c82f2cc17e340c16447bbe33d96bc105be07da26d7f",
"0xe1e46bf6bc8d6a16b20fab942ad428ed565e505ac1f4af5beaca80a24bec3a78",
"0x555abe38a61b805f6952e6448571e2300cdb211205647a8ebd0421164bde835a",
"0x0b844a3b96d50bfca2f25eb3f5d27dd8d8cdf05593da9737082b1d66f5284f58",
"0xa1c62354c81874cd30fef7abedae28151ffffc421fd7a4e5047c7a96e1cb511e",
"0x09fa7d9fb73a0882955bcbda5e27e8fdda239b7310f7a49ca1800b47fb62d887",
"0x2798def1359afa3adf86443dd3875b4877f9680d4a069a74bbc3d61ef64c38f9",
"0x0684865d261dc8d8bb8fe24d6f1b2c5eb4cdac2eb8e63873d2d27f26934a6e55",
"0x39b8ddf12d19c49e20620173bbde98358759e4d932a33c109879ec5c9c265674",
"0xd27ffafd63aaaa5c3aa3e6af0e63f5ff9a464afb4acd5f8a2162238a2e20f61a"
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
            gas: 8000000,
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


