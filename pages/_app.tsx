// Import the global CSS styles
import '../styles/globals.css'

// Define a function called 'MyApp' that takes two arguments: 'Component' and 'pageProps'
function MyApp({ Component, pageProps }) {
  // Render the 'Component' and pass along any 'pageProps' it needs
  return <Component {...pageProps} />
}

// Export 'MyApp' as the default export, making it available for other modules to import and use
export default MyApp
