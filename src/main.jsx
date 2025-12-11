import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router'
import AuthProvider from './Context/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast';
  import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
     <Toaster />
      <ToastContainer />
   </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </StrictMode>,
)
