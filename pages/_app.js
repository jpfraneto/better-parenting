import '../styles/globals.css';
import Navbar from '../components/Layout/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
