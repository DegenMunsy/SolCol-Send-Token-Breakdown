// Import required libraries and hooks
import { useConnection, useWallet } from '@solana/wallet-adapter-react'; // Import 'useConnection' and 'useWallet' hooks from '@solana/wallet-adapter-react' library
import * as web3 from '@solana/web3.js' // Import all named exports from the '@solana/web3.js' library as 'web3' object
import { LAMPORTS_PER_SOL } from '@solana/web3.js'; // Import 'LAMPORTS_PER_SOL' constant from '@solana/web3.js' library
import { FC, useState } from 'react' // Import 'FC' (Functional Component) type and 'useState' hook from 'react' library
import styles from '../styles/Home.module.css' // Import the CSS styles from the 'Home.module.css' file in the 'styles' folder

// Create a functional component called 'SendSolForm'
export const SendSolForm: FC = () => {
    // Declare 'txSig' state and its setter function 'setTxSig' with an initial value of an empty string
    const [txSig, setTxSig] = useState('');
    // Get the 'connection' object from the 'useConnection' hook
    const { connection } = useConnection();
    // Get the 'publicKey' and 'sendTransaction' objects from the 'useWallet' hook
    const { publicKey, sendTransaction } = useWallet();
    // Define a function 'link' that returns a link to the Solana Explorer for the transaction signature
    const link = () => {
        return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=mainnet-beta` : ''
    }

    // Define a function 'sendSol' that sends SOL to a recipient
    const sendSol = event => {
        event.preventDefault() // Prevent the default form submission behavior
        if (!connection || !publicKey) { return } // If there's no 'connection' or 'publicKey', exit the function
        const transaction = new web3.Transaction() // Create a new Solana transaction
        const recipientPubKey = new web3.PublicKey(event.target.recipient.value) // Get the recipient's public key from the form input

        // Create a 'sendSolInstruction' to transfer SOL from the user's wallet to the recipient
        const sendSolInstruction = web3.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: recipientPubKey,
            lamports: LAMPORTS_PER_SOL * event.target.amount.value
        })

        transaction.add(sendSolInstruction) // Add the 'sendSolInstruction' to the transaction
        // Send the transaction and update the 'txSig' state with the transaction signature
        sendTransaction(transaction, connection).then(sig => {
            setTxSig(sig)
        })
    }

        // Return the JSX (HTML-like syntax) to be rendered by the component
        return (
            <div>
                {
                    publicKey ?
                        // If the user's wallet is connected (publicKey is available), display the form to send SOL
                        <form onSubmit={sendSol} className={styles.form}>
                            <label htmlFor="amount">Amount (in SOL) to send:</label>
                            <input id="amount" type="text" className={styles.formField} placeholder="e.g. 0.1" required />
                            <br />
                            <label htmlFor="recipient">Send SOL to:</label>
                            <input id="recipient" type="text" className={styles.formField} placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA" required />
                            <button type="submit" className={styles.formButton}>Send</button>
                        </form> :
                        // If the user's wallet is not connected, display a message to connect the wallet
                        <span>Connect Your Wallet</span>
                }
                {
                    txSig ?
                        // If a transaction signature exists, display a link to view the transaction on Solana Explorer
                        <div>
                            <p>View your transaction on </p>
                            <a href={link()}>Solana Explorer</a>
                        </div> :
                        // If no transaction signature exists, do not display anything
                        null
                }
            </div>
        )
    }
    