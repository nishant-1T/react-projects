import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./views/Home.jsx";

// React Router project componets
import ReactRouterLayout from "./views/ReactRouter-project/React-router-layout.jsx";
import Router_Home from './views/ReactRouter-project/pages/Home/Home.jsx'
import About from './views/ReactRouter-project/pages/About/About.jsx'
import Contact from './views/ReactRouter-project/pages/Contact/Contact.jsx'
import User from './views/ReactRouter-project/pages/User/User.jsx'
import Github, { githubInfoLoader } from './views/ReactRouter-project/pages/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="router-project/" element={<ReactRouterLayout />}>
        <Route path="" element={<Router_Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
