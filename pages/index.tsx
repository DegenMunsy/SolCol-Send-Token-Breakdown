// Import required libraries and components
import { NextPage } from 'next' // Import the 'NextPage' type from the 'next' library
import styles from '../styles/Home.module.css' // Import the CSS styles from the 'Home.module.css' file in the 'styles' folder
import WalletContextProvider from '../components/WalletContextProvider' // Import the 'WalletContextProvider' component from the 'components' folder
import { AppBar } from '../components/AppBar' // Import the 'AppBar' component from the 'components' folder
import { BalanceDisplay } from '../components/BalanceDisplay' // Import the 'BalanceDisplay' component from the 'components' folder
import { SendSolForm } from '../components/SendSolForm' // Import the 'SendSolForm' component from the 'components' folder
import Head from 'next/head' // Import the 'Head' component from the 'next/head' library

// Create a Next.js page component called 'Home'
const Home: NextPage = (props) => {

  // Return the JSX (HTML-like syntax) to be rendered by the component
  return (
    <div className={styles.App}>
        {/*  Add a description meta tag */}
        <Head>
        <title>Sol Docs Sol Col Style</title> {/* Set the page title */}
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />   {/*  Add a description meta tag */}

      </Head>
      {/* // Wrap the components with the 'WalletContextProvider' component */}
      <WalletContextProvider>
        {/* // Insert the 'AppBar' component */}
        <AppBar />
        {/* // Create a div container with a CSS class 'AppBody' from the imported styles */}
        <div className={styles.AppBody}>
          {/* // Insert the 'BalanceDisplay' component */}
          <BalanceDisplay />
          {/* // Insert the 'SendSolForm' component */}
          <SendSolForm />
        </div>
      </WalletContextProvider >
    </div>
  );
}

// Export the 'Home' component as the default export
export default Home;
