// Import required libraries and components
import { FC, ReactNode } from "react"; // Import the 'FC' (Functional Component) type and 'ReactNode' type from the 'react' library
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react' // Import 'ConnectionProvider' and 'WalletProvider' components from '@solana/wallet-adapter-react' library
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"; // Import 'WalletModalProvider' component from '@solana/wallet-adapter-react-ui' library
import * as web3 from '@solana/web3.js' // Import all named exports from the '@solana/web3.js' library as 'web3' object
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'; // Import 'PhantomWalletAdapter' from '@solana/wallet-adapter-wallets' library
require('@solana/wallet-adapter-react-ui/styles.css') // Import the required styles from '@solana/wallet-adapter-react-ui/styles.css'

// Create a functional component called 'WalletContextProvider' that accepts 'children' as a prop
const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // Define the wallets to be used in the application (in this case, Phantom wallet)
    const wallets = [new PhantomWalletAdapter()]

    // Define the Solana network RPC endpoint
    const endpoint = //'ADD__YOUR_NODE_URL_HERE'

    // Return the JSX (HTML-like syntax) to be rendered by the component
    return (
        // Wrap the children components with the 'ConnectionProvider' component, passing the RPC endpoint
        <ConnectionProvider endpoint={endpoint}>
            {/* Wrap the children components with the 'WalletProvider' component, passing the supported wallets */}
            <WalletProvider wallets={wallets}>
                {/* Wrap the children components with the 'WalletModalProvider' component */}
                <WalletModalProvider>
                    { children } {/* Render the children components passed as props to 'WalletContextProvider' */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

// Export the 'WalletContextProvider' component as the default export
export default WalletContextProvider
