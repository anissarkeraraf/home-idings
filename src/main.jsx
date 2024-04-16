import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home.jsx';
import Root from './componants/Root/Root.jsx';
import UpdateProfile from './componants/UpdateProfile/UpdateProfile.jsx';
import UserProfile from './componants/User/UserProfile.jsx';
import Login from './componants/Login/Login.jsx';
import Register from './componants/Register/Register.jsx';
import AuthProvider from './componants/Provider/AuthProvider.jsx';
import PrivateRout from './componants/privateRoute/PrivateRout.jsx';
import AboutUs from './componants/AboutUs/AboutUs.jsx';
import FeaturedCards from './componants/FeaturedCards/FeaturedCards.jsx';
import EstateSection from './componants/EstateSection/EstateSection.jsx';
import Contact from './componants/Contact/Contact.jsx';
import NotFound from './componants/NotFound/NotFound.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Properties from './componants/Properties/Properties.jsx';

const router = createBrowserRouter([

  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/fake.json')
      },
      {
        path: '/home/:id',
        element: <PrivateRout><EstateSection></EstateSection></PrivateRout>,
        loader: () => fetch('/fake.json')
      },
      {
        path: '/featured',
        element: <FeaturedCards></FeaturedCards>
      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/user',
        element: <PrivateRout><UserProfile></UserProfile></PrivateRout>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
        loader: () => fetch('/agents.json')       
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/properties',
        element: <PrivateRout><Properties></Properties></PrivateRout>,
        loader: () => fetch('/fake.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
