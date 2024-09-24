import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//pagine
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));



//componenti
import Loading from "../components/Loading";
import Layout from "./Layout";

const AppRoutes = () => {

  return(
    <>
      <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
    </>
  )
};

export default AppRoutes;
