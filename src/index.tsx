import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import Product from './components/product'

const container = document.getElementById('root')!
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-left" newestOnTop />
      <RouterProvider router={router} />
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
)
