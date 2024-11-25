import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contect from './pages/Contect/Contect';
import Service from './pages/Services/Services';
import CaseStudy from './pages/CaseStudy/CaseStudy';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact',
      element: <Contect />
    },
    {
      path: '/services',
      element: <Service />
    },
    {
      path: '/caseStudy',
      element: <CaseStudy />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;