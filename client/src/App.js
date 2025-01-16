import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contect from "./pages/Contect/Contect";
import Service from "./pages/Services/Services";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import NotFound from "./pages/Error/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contect />,
    },
    {
      path: "/services",
      element: <Service />,
    },
    {
      path: "/caseStudy",
      element: <CaseStudy />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
