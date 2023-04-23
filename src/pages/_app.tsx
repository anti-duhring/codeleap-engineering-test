import store, { persistor } from '@/redux/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@/style/global.css'
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Component {...pageProps} /> 
      </PersistGate>
    </Provider>
  )
}
