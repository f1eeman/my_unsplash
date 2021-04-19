import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../store';
import '../styles/style.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default App;
