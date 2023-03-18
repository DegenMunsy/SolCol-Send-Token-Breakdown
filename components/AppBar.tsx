import { FC } from 'react' // Import the 'FC' (Functional Component) type from the 'react' library
import styles from '../styles/Home.module.css' // Import the CSS styles from the 'Home.module.css' file in the 'styles' folder
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui' // Import the 'WalletMultiButton' component from the '@solana/wallet-adapter-react-ui' library
import Image from 'next/image' // Import the 'Image' component from the 'next/image' library

// Create a functional component called 'AppBar'
export const AppBar: FC = () => {
    // Define the JSX (HTML-like syntax) to be rendered by the component
    return (
        // Create a div container with a CSS class 'AppHeader' from the imported styles
        <div className={styles.AppHeader}>
             <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ padding: '10px 0' }}>SOLANA COLLEGE</span>
             </div>
             <WalletMultiButton />
        </div>
    );
};