import { createBrowserRouter } from "react-router-dom";
import Mainhome from "../pages/HomePage/Mainhome"; 
import Services from "../pages/Services/Services";
import About from "../pages/AboutPage/About";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import App from "../App"; 
import ContactPage from "../pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", 
        element: <Mainhome />,
      },
      {
        path: "services", 
        element: <Services />,
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "contact", 
        element: <ContactPage/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ],
  },
]);



