import '../styles/globals.css'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
function MyApp({ Component, pageProps }) {
  return <LocalizationProvider dateAdapter={AdapterDateFns}><Component {...pageProps} /></LocalizationProvider>
}

export default MyApp
