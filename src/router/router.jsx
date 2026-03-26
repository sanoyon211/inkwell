import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <BlogList /> },
      { path: "blog/:id", element: <BlogDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
