import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/works.tsx";
import About from "./pages/about.tsx";
import Contacts from "./pages/contacts.tsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/works",
    element: <Works/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
