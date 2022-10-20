import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

window.addEventListener('load', () => {
  root.render(
    <React.StrictMode>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
      {/* <App /> */}
    </React.StrictMode>
  )
})
