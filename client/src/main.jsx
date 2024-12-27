import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateRequest from './pages/CreateRequest.jsx';
import GuestLayout from './layouts/Guest.jsx';
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/create',
        element: <CreateRequest />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
