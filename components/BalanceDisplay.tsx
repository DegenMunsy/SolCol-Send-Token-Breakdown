// Import required libraries and hooks
import { useConnection, useWallet } from '@solana/wallet-adapter-react'; // Import 'useConnection' and 'useWallet' hooks from '@solana/wallet-adapter-react' library
import { LAMPORTS_PER_SOL } from '@solana/web3.js'; // Import 'LAMPORTS_PER_SOL' constant from '@solana/web3.js' library
import { FC, useEffect, useState } from 'react' // Import 'FC' (Functional Component) type, 'useEffect' and 'useState' hooks from 'react' library

// Create a functional component called 'BalanceDisplay'
export const BalanceDisplay: FC = () => {
    // Declare 'balance' state and its setter function 'setBalance' with an initial value of 0
    const [balance, setBalance] = useState(0);
    // Get the 'connection' object from the 'useConnection' hook
    const { connection } = useConnection();
    // Get the 'publicKey' object from the 'useWallet' hook
    const { publicKey } = useWallet();

    // Define a side effect that runs when 'connection' or 'publicKey' changes
    useEffect(() => {
        // If there's no 'connection' or 'publicKey', exit the effect
        if (!connection || !publicKey) { return }

        // Fetch account info for the 'publicKey' and update the 'balance' state with the number of lamports
        connection.getAccountInfo(publicKey).then(info => {
            setBalance(info.lamports);
        })
    }, [connection, publicKey]) // The effect depends on the 'connection' and 'publicKey' values

    // Return the JSX (HTML-like syntax) to be rendered by the component
    return (
        <div>
            {/* Display the balance in SOL if the 'publicKey' is available */}
            <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL}` : ''}</p>
        </div>
    )
}
