import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// var web3 = require('@solana/web3.js');
// var splToken = require('@solana/spl-token');

// (async () => {
//   // Connect to cluster
//   var connection = new web3.Connection(
//     web3.clusterApiUrl("devnet"),
//     'confirmed',
//   );

//   // Generate a new wallet keypair and airdrop SOL
//   var fromWallet = web3.Keypair.generate();
//   var fromAirdropSignature = await connection.requestAirdrop(
//     fromWallet.publicKey,
//     web3.LAMPORTS_PER_SOL,
//   );
//   //wait for airdrop confirmation
//   await connection.confirmTransaction(fromAirdropSignature);

//   //create new token mint
//   let mint = await splToken.Token.createMint(
//     connection,
//     fromWallet,
//     fromWallet.publicKey,
//     null,
//     9,
//     splToken.TOKEN_PROGRAM_ID,
//   );

//   //get the token account of the fromWallet Solana address, if it does not exist, create it
//   let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
//     fromWallet.publicKey,
//   );

//    // Generate a new wallet to receive newly minted token
//    var toWallet = web3.Keypair.generate();

//   //get the token account of the toWallet Solana address, if it does not exist, create it
//   var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
//     toWallet.publicKey,
//   );

//   //minting 1 new token to the "fromTokenAccount" account we just returned/created
//   await mint.mintTo(
//     fromTokenAccount.address, //who it goes to
//     fromWallet.publicKey, // minting authority
//     [], // multisig
//     1000000000, // how many
//   );

//   await mint.setAuthority(
//     mint.publicKey,
//     null,
//     "MintTokens",
//     fromWallet.publicKey,
//     []
//   )

//   // Add token transfer instructions to transaction
//   var transaction = new web3.Transaction().add(
//     splToken.Token.createTransferInstruction(
//       splToken.TOKEN_PROGRAM_ID,
//       fromTokenAccount.address,
//       toTokenAccount.address,
//       fromWallet.publicKey,
//       [],
//       1,
//     ),
//   );

//   // Sign transaction, broadcast, and confirm
//   var signature = await web3.sendAndConfirmTransaction(
//     connection,
//     transaction,
//     [fromWallet],
//     {commitment: 'confirmed'},
//   );
//   console.log('SIGNATURE', signature);
// })();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
